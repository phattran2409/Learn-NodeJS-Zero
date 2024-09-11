const path = require("path")
const express = require("express")

 const configViewEngine = (app) => {
   app.set("views", path.join('./src', 'view'));
   app.set("view engine", "ejs");

   // config static  file

   // if use  __dirname path will get curent at config 
    console.log(">> check __dirname : " + path.join('./src', 'view'));
    
   app.use(express.static(path.join('./src', "public")));
 }
 
 module.exports = configViewEngine;