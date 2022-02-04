import fetch from 'node-fetch';
import express from 'express';

const app = express();
const port = 8080;

app.get('/api/v1/:api_key/:earth_date', (req, res) => {
  
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');

  const { api_key } = req.params;
  const { earth_date } = req.params;

  // validate earth_date format
  var pattern =/^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/;
  if (pattern.test(earth_date) != true) {
    res.send({ error: 'Invalid Date Format (Exp: YYYY-MM-DD)'})
    return
  }
  const myRequest = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key='+api_key+'&earth_date='+earth_date;
  
  fetch(myRequest)
  .then(response => response.json())
  .then(function(response) {
    const arr = [];
    for (var key in response) {
        var obj = response[key];
        for (var prop in obj) {
            arr.push(obj[prop]['img_src']);
        }
    }
    res.send(arr)
  })
  .catch((error) => {
    res.send({ error: error});
    return
  });
  
});

app.listen(port);
console.log('API URL http://localhost:'+port+'/api/v1/<--api_key-->/YYYY-MM-DD');
