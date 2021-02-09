var express = require('express');
var router = express.Router();
const usermodel=require('../db/connection');
const users = require('../db/connection');
const alert=require('alert')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./public/index.html');
});

router.post('/data',(req,res)=>{

  const user= new users({name:req.body.name,number:req.body.number})

  user.save().then(()=>{

    alert(`thanku ${req.body.name}+ we contact you soon`)
   
  })
  res.redirect('/')



})

module.exports = router;
