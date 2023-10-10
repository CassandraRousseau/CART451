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
// console.log(process.env) 

const { MongoClient } = require('mongodb');
const url = process.env.MONGO_DB_URI;
// Database Name

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {});


async function run() {
  try {
    
    await client.connect();
    await client.db("admin").command({ping:1});
    // console.log("success");
    
    const db = await client.db("CART451_Final_Project");
    const videos = await db.collection("youtube_videos");

// Counts the number of input in the collection
    const estimate = await videos.estimatedDocumentCount();
    console.log(`Estimated number of documents in the videos collection: ${estimate}`);
    
    // Display all the data in the console
let results = await videos.find({}).toArray();
console.log(results);

// Find one video according to the inputed data catregories
    const options = {

      projection: {'description':1, 'category':1}
    }
    let isInGroup = await videos.findOne({'category':{$in:["beauty","vlogs", "travel", "food"]}}, options)
    console.log(isInGroup);

// Retrieves data
    const yt_video = "title";
    // Specify an optional query document to narrow results
    const content = { category: "history" };
    // Execute the distinct operation
    const distinctValues = await videos.distinct(yt_video, content);

    // Print the result
    console.log(distinctValues);

    // let unwound = await videos.aggregate([ 
    //   $text: {
    //     $search: "pasta",
    //     $caseSensitive: true
    //   }]);
    // console.log(unwound);
    let findings = await videos.find( { $text: { $search: "coffee shop" } } );

    console.log(findings);
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

});

//default route
app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

function clientRoute(req, res, next) {
  res.sendFile(__dirname + "/public/client.html");
}



