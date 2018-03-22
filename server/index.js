import express from "express";
import comments from "./comments";
import products from "./products";
import vehicles from "./vehicles";
import contacts from "./contacts";

import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// Get full list
app.get("/contacts",function (request,response,next){
//  console.log(contacts)
  response.json(contacts);
});
app.get("/comments",function (request,response,next){
  response.json(comments);
});
app.get("/vehicles",function (request,response,next){
  response.json(vehicles);
});
app.get("/products",function (request,response,next){
  response.json(products);
});



// get by UserID


app.get("/contacts/:userID",function (request,response,next){
  // console.log("You want to get all users with num");
  // let contactID = parseInt(request.params.userID) + 1;
  // console.log("this is contact: "+ contactID);
  // response.send(contacts[contactID])
  console.log("contact success");
  response.json(contacts[request.params.userID])
});

app.get("/vehicles/:userID",(request,response,next) => {
  console.log("You want to get all users defualt");
  // response.send("success")
  response.json(vehicles[request.params.userID])
});

app.get("/comments/:userID",function (request,response,next){
  console.log("You want to get all users with num");
  response.json(comments[request.params.userID])
});

app.get("/products/:userID",(request,response,next) => {
  console.log("You want to get all users defualt");
  // response.send("success")
  response.json(products[request.params.userID])
});

// Post by userID

app.post("/contacts", function (req, res, next){
  console.log("post contacts success");
  contacts.push({"_id":99,"name":req.body.name, "occupation":req.body.occupation, "avatar": req.body.avatar})
  res.json(contacts)
});

app.post("/comments", function (req, res, next){
  // console.log("post contacts success");
  console.log(req.body.body)
  comments.push({"_id":99,"body":req.body.body})
  res.json(comments)
});

app.post("/vehicles", function (req, res, next){
  console.log("post contacts success");
  contacts.push({"_id":99,"name":req.body.name, "occupation":req.body.occupation, "avatar": req.body.avatar})
  res.json(vehicles)
});

app.post("/products", function (req, res, next){
  console.log("post contacts success");
  contacts.push({"_id":99,"name":req.body.name, "occupation":req.body.occupation, "avatar": req.body.avatar})
  res.json(products)
});

// Delete
app.delete("/contacts", function (req, res, next){
  console.log("delete contacts success");
  contacts.pop()
  console.log("contacts "+ contacts )
  res.json(contacts)
});

app.delete("/comments", function (req, res, next){
  // console.log("post contacts success");
  console.log(req.body.body)
  comments.push({"_id":99,"body":req.body.body})
  res.json(comments)
});

app.delete("/vehicles", function (req, res, next){
  console.log("post contacts success");
  contacts.push({"_id":99,"name":req.body.name, "occupation":req.body.occupation, "avatar": req.body.avatar})
  res.json(vehicles)
});

app.delete("/products", function (req, res, next){
  console.log("post contacts success");
  contacts.push({"_id":99,"name":req.body.name, "occupation":req.body.occupation, "avatar": req.body.avatar})
  res.json(products)
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
