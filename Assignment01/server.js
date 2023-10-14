const express = require("express");
const portNumber = 4200;
const app = express(); //make an instance of express
const server = require("http").createServer(app);
require("dotenv").config();  
// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public"));

app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

app.use("/client", clientRoute);
// console.log(process.env) 
const uri = process.env.MONGO_DB_URI;
const { MongoClient, ObjectId } = require('mongodb');
// Database Name
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {});

async function run() {
  try {

    client.connect().then((res) => {
    const db =  client.db("CART451_Final_Project");
    const videos =  db.collection("youtube_videos", {
      collation: { locale: "fr_CA",  numericOrdering: true,},});
     
      let getSearchCrit = async function (req, res) {
        console.log(req.query);
        // MUST set up an index
        let r = await videos.createIndex({ category: 1 });
        let search = await videos.createIndex({ description: 1 });
        let s = await videos.createIndex({ title: 1 });
          let responseArt = await videos.aggregate([
            {$match: {category: "art_music", description: {$lte:"400"}}},
              {$sort:{description:1}},
              {$project:{
                _id:0,
                link:1,
                title:1,
                description:1,
              },}
          ]).toArray();
      
       res.send(responseArt);
          
      };

      //3:: receiving serach criteria from the client
      app.use("/sendSearch", getSearchCrit);
      });

} // in try 
catch (error) {
    console.error("error::");
    console.log(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
 /* The finally block will always execute before control flow exits the try...catch...finally construct. 
 It always executes, regardless of whether an exception was thrown or caught.*/
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run()



// make server listen for incoming messages
server.listen(portNumber, function () {
  console.log("listening on port:: " + portNumber);
  console.log(process.env.Mongo_DB_URI);

});

//default route
app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

function clientRoute(req, res, next) {
  res.sendFile(__dirname + "/public/client.html");
}

