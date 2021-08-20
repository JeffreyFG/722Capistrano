var express = require('express');
var router = express.Router();
var path = require('path');
/* GET FAQ page. */
let rootPath = { root: './public'}
router.get('/', function(request, response, next) 
{
  response.sendFile( './html/FAQ.html',rootPath);
});
module.exports = router;