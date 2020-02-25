var express = require('express');
var router = express.Router();

/* GET home page. */
//path listed here is the child of the parent stated in app.js
router.get('/', function(req, res, next) {
  //renders an ejs page, does not need a forward slash
  //title is a variable that is passed to the ejs page with the value of 'express'
  //should return final res
  //typical error 'headers cannot be reset'
  res.render('index', { title: 'Express' });
});

router.get('/sendroute', (req,res)=>{
  //this res.send sends text to the browser
  return res.send('sending text');
});

router.get('/statusjson', (req, res)=>{
  //this will show a status and render my info in json format
  return res.status(201).json({message:'json created'});
});

module.exports = router;
