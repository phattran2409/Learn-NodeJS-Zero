//  dotentv
require("dotenv").config();
const express = require("express");
const path = require("path");
const viewEngine = require("./config/viewEngine");
const connection = require("./config/database");
const { default: mongoose } = require("mongoose");
const { name } = require("ejs");


const app = express();
const port = process.env.PORT || 8888;
const hostName = process.env.HOST_NAME;

// log env
// console.log(process.env);

//config template engine
viewEngine(app)

// config req body
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`);
});

const kittySChema = new mongoose.Schema({
  name : String
})
const Kitten = mongoose.model('Kitten' , kittySChema);
const cat = new Kitten({name : 'hoi  Dan IT'})
cat.save();

(async () => {
  try {
    await connection();
     app.listen (port , hostName , () => {
      console.log(' BackEnd app listening on port '+port);
      
     })
  } catch (error) {
    console.log("error connect to database",error);
    
  }
}) 
();
