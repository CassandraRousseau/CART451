/** this file uses the http server -- when the client fills out the form - data is posted and
 * the server receives the request and inserts into mongo
 * OR the client makes a search request - the server receives the request --> 
 * retrieves data from the db and sends the response back....
 */

const express = require("express");
const portNumber = 4200;
const app = express(); //make an instance of express
const server = require("http").createServer(app);

// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public"));

app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

app.use("/client", clientRoute);

require("dotenv").config();

const { MongoClient } = require("mongodb");
const url = process.env.MONGO_DB_URI;
// Database Name

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect().then((res) => {
      // A:
      const database = client.db("sample_geospatial");
      const shipwrecks = database.collection("shipwrecks");

      // the callback function for when data is POSTED
      //ADD
      let handlePost = async function (request, response) {
        console.log(request.body);
        //2 insert
        await shipwrecks.insertOne(request.body);
        response.send("SUCCESS POST");
      };

      /// use this VERB for getting posted data...
      app.use("/postForm", handlePost);

      //function to get the data from mongo and send back
      //https://www.mongodb.com/docs/v7.0/reference/operator/aggregation/geoNear/
      let getSearchCrit = async function (req, res) {
        console.log(req.query);
        // MUST set up an index
        let r = await shipwrecks.createIndex({ coordinates: "2dsphere" });

        /* using the mongo $geonear:
        we can filter results based on thre location coordinates ...*/
        let responseArray = await shipwrecks
          .aggregate([
            {
              $geoNear: {
                near: {
                  type: "Point",
                  coordinates: [
                    parseFloat(req.query.lng_send),
                    parseFloat(req.query.lat_send),
                  ],
                },
                distanceField: "distance",
                maxDistance: 20000,
                spherical: true,
              },
            },
          ])
          .toArray();
        console.log(responseArray);
        res.send(responseArray);
      };

      //3:: receiving serach criteria from the client
      app.use("/sendSearch", getSearchCrit);
    });
  } catch (error) {
    // in try
    console.error("error::");
    console.log(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  } finally {
    /* The finally block will always execute before control flow exits the try...catch...finally construct. 
 It always executes, regardless of whether an exception was thrown or caught.*/
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run();

// make server listen for incoming messages
server.listen(portNumber, function () {
  console.log("listening on port:: " + portNumber);
});

//default route
app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

function clientRoute(req, res, next) {
  res.sendFile(__dirname + "/public/client.html");
}
