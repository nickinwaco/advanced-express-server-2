// Your server code here...
import express from "express";
import state from "./state.js"

import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// app.get("/users/:userID",function (request,response,next){
//   console.log("You want to get all users with num");
//   response.send(state)
// });

app.get("/users/",function (request,response,next){
  console.log("You want to get all users defualt");
  response.send(state.users)
});


app.get("/users/usersID",function (request,response,next){
  console.log("You want to get all users defualt");
  response.send(state.users)
});


app.post("/users/1", function (req, res, next){
  console.log("test");
  state.users.push(req.params.userID)
  //res.json("success " + state.users)
  res.send( state.users[0])

});

app.put("/users/:userID", function (req, res, next){
  console.log("test "+ req.params.userID);
  // state.users.push(req.params.userID)
  res.json("success " + state.users)

});


app.delete("/usersd/:userID", function (req, res, next){
  console.log("test");
  state.users.pop()
  res.json("deleted " + state.users)

});




app.listen(3002, (err) => {
 if (err) {
   return console.log("Error", err);
 }
});
