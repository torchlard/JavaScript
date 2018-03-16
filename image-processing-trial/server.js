const fs = require('fs')
const express = require("express")
const http = require('http')

const app = express();
const httpServer = http.createServer(app);

app.use(express.static('./public'));
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.get('/', (req,res) => {
  res.render('index')
});

httpServer.listen(8000, () => console.log('start...'));



