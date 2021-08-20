var express = require('express');
var router = express.Router();
var path = require('path');
/* GET Contact page. */
let rootPath = { root: './public'}
router.get('/', function(request, response, next) 
{
  response.sendFile( './html/Contact.html',rootPath);
});
module.exports = router;