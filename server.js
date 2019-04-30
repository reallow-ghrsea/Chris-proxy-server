require('newrelic');
const express = require('express');
const path = require('path');
const axios = require ('axios');
const cors = require('cors');

var service1Url= 'http://localhost:3333/api/listingGallery';

const app = express();

const port = process.env.PORT || 9000;

app.use('/:propertyId', express.static('public'));

app.get('/api/listingGallery/:propertyId', cors(), (req, res)=> {
  axios.get(service1Url+`/${req.params.propertyId}`)
  .then( data => {
    res.send(data.data);
  })
  .catch(e => {
    console.log(e);
  })
})

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log(`Proxy Server running at port ${port}`)
});