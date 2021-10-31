'use strict'
const express=require('express');
const server=express();
require('dotenv').config;
const PORT=process.env.PORT||3010;

server.get('/', home)
function home(req,res){
    res.status(200).send('welcome')
}


const letbegin=()=>{
server.listen(PORT,()=>{console.log(`hi on${PORT}`)})}

module.exports={server,letbegin}