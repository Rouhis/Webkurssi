'use strict'


const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

let requestcounter = 0;

app.use(express.static('public'))

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

app.get("/catinfo", (req, res) => {
    const cat = {
      name: "Lana",
      birthdate: "2010-12-25",
      weight: 69,
    };
    res.json(cat);
  });

app.get('/test', (req, res) => {
    console.log('Someone is trying to test me.')
    requestcounter++
    res.send('<h1>TEXT</h1><p>' +requestcounter+ '</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

