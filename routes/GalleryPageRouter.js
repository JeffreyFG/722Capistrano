var express = require('express');
var router = express.Router();
var path = require('path');
/* GET Gallery page. */
let rootPath = { root: './public'}
router.get('/', function(request, response, next) 
{
  response.sendFile( './html/Gallery.html',rootPath);
});
module.exports = router;