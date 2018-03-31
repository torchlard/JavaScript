// const fs = require('fs')
// const express = require("express")
// const http = require('http')

import fs from 'fs';
import express from 'express';
import http from 'http';
import util from 'util';
import cors from 'cors';

const app = express();
const httpServer = http.createServer(app);

app.use(express.static('./public'));
app.use(cors({credentials: true, origin: true}))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.get('/', (req,res) => {
  res.render('index')
});

httpServer.listen(8000, () => console.log('start...'));

// handle download file
// function decodeBase64Image(dataString) {
//   var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
//   var response = {};
//
//   if (matches.length !== 3)
//   {
//     return new Error('Invalid input string');
//   }
//
//   response.type = matches[1];
//   response.data = new Buffer(matches[2], 'base64');
//
//   return response;
// }

http.createServer((req, res) => {
  // console.log('req received:');

  req.setEncoding('utf8')
  req.on('data', (data_write) => {

    // let data2 = decodeURIComponent(data_write.toString('utf8'));
    let data2 = decodeURIComponent(data_write);
    // remove header 'image='
    data2 = data2.substr(6, data2.length);
    // console.log(data2);

    fs.writeFile('./public/img/test.png', data2, {encoding: 'base64'}, (err)=>{
      if (err) throw err;
      console.log('file saved!');

      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.end('test.png');
    });

  });
  // req.on('end', () => {
  //   res.end('received')
  // })

}).listen(8001);













