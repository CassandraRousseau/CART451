const express = require("express");
const portNumber = 4300;
const app = express(); //make an instance of express
const server = require("http").createServer(app);

require('dotenv').config();

// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public"));



app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

app.use("/client", clientRoute);

const mongo_connection_url= process.env.Mongo_DB_URI_TWO;

const {MongoClient} = require ('mongodb') //reference to library

const client = new MongoClient(mongo_connection_url,{}); //instance of client
async function run(){
  try{
await client.connect();
await client.db("admin").command({ping:1});
console.log("success");

const db = await client.db("cassandraTest");
// const unis = await db.createCollection("universities");
// const courses = await db.createCollection("courses");
// let data = [{
//   country : 'Spain',
//   city : 'Salamanca',
//   name : 'USAL',
//   location : {
//     type : 'Point',
//     coordinates : [ -5.6722512,17, 40.9607792 ]
//   },
//   students : [
//     { year : 2014, number : 24774 },
//     { year : 2015, number : 23166 },
//     { year : 2016, number : 21913 },
//     { year : 2017, number : 21715 }
//   ]
// },
// {
//   country : 'Spain',
//   city : 'Salamanca',
//   name : 'UPSA',
//   location : {
//     type : 'Point',
//     coordinates : [ -5.6691191,17, 40.9631732 ]
//   },
//   students : [
//     { year : 2014, number : 4788 },
//     { year : 2015, number : 4821 },
//     { year : 2016, number : 6550 },
//     { year : 2017, number : 6125 }
//   ]
// }
// ]
// let courseData = [
//   {
//       university : 'USAL',
//       name : 'Computer Science',
//       level : 'Excellent'
//     },
//     {
//       university : 'USAL',
//       name : 'Electronics',
//       level : 'Intermediate'
//     },
//     {
//       university : 'USAL',
//       name : 'Communication',
//       level : 'Excellent'
//     }

// ]
// await unis.insertMany(data);
// await courses.insertMany(courseData);

const unis = await db.collection("universities");
const courses = await db.collection("courses");

// await unis.insertMany(data);
// await courses.insertMany(courseData);

// await courses.insertOne({
// university:"UPSA",
// name:"Communication",
// level:"Intermediate"
// })

// let matches = await unis.aggregate([

//   {$match:{country:"Spain", city:"Salamanca"}},
//   {$project:{city:1,name:1}},
//   {$group:{_id:"$name", totaldocs:{$sum:1}}}
// ]).toArray();

// console.log(matches);
 
let unwound = await unis.aggregate([
  {$match:{"name":"USAL"}},
  {$unwind:"$students"},
  {$project:{_id:0,"students.number":1,"students.year":1}},
  {$sort:{"students.number":-1}},
  {$count:"salamance_students"}
]).toArray();
console.log(unwound);


// let result =  await client.db("admin").command({listDatabases:1, nameOnly:true})
// console.log(result.databases);

// let ref_db = await client.db("sample_airbnb");
// let colls = await ref_db.listCollections().toArray();
//console.log(colls[0]);

// let listReviews = await ref_db.collection("listingsAndReviews");

// let result = await listReviews.findOne({number_of_reviews:0})
// console.log(result);

// let doubleRes = await listReviews.findOne({'host.host_neighbourhood':'Flatbush', 'host.host_name':'Karen'});
// console.log(doubleRes);

// const options = {

//   projection: {'host.host_name':1, 'host.host_neighbourhood':1}
// }

// let projectedObject = await listReviews.findOne({'host.host_name':'Karen'}, options);
// console.log(projectedObject)

// let isInGroup = await listReviews.findOne({'host.host_name':{$in:["Josh","Michelle", "Louise", "Karen"]}}, options)
// console.log(isInGroup);


// let results = await listReviews.find({}).toArray();
// console.log(results);

let options_2 = {
  projection:{"host.host_name":1, "number_of_reviews":1}
}

// let query_one = await listReviews.find({"number_of_reviews":{$gt:195}}, options_2).toArray();
//console.log(query_one);

// console.log(query_one);

// for(entry of query_one){
// console.log(entry)

// }

// let or_op = await listReviews.find({$or:[{number_of_reviews: {$lt:20}},{"host.host_name":"Josh"}]}, options_2).sort({"host.host_name":1}).limit(10).toArray();
// console.log(or_op); 
// let updatedN = await listReviews.find({"host.host_name": "Ana&Gonçalo"}, options_2).toArray();

//   console.log(updatedN);

}catch(error){
    //console.error()
console.log(error);

  }finally{

await client.close();

  }
}
  run();
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




