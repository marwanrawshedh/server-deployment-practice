"use strict";
const express = require("express");
const server = express();
require("dotenv").config;
const PORT = process.env.PORT || 3010;
const notfound = require("./error/notfound");
const time = require("./middleware/date");
const generale=('./error/generalerror.js')
server.use(express.json());
server.get("/", home);
function home(req, res) {
  res.status(200).send("welcome");
}
server.get("/data",time ,(req, res) => {
  const info = { name: "marwan", agg: "2", date: req.timestamp };

res.status(200).send(info);
});

server.get('/error',(req,res,next)=>{
    throw new Error('You made an Error ');
})
server.use("*", notfound);

// server.use(generale);
server.use((error, req, res, next) => {
    res.status(500).send({
        error: 500,
        route: req.path,
        query: req.query,
        body: req.body,
        message: `SERVER ERROR: ${error.message}`
      })
});
 console.log
const letbegin = () => {
  server.listen(PORT, () => {
    console.log(`hi on${PORT}`);
  });
};

module.exports = { server, letbegin };
