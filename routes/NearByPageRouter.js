var express = require('express');
var router = express.Router();
var path = require('path');
/* GET Near By page. */
let rootPath = { root: './public'}
router.get('/', function(request, response, next) 
{
  response.sendFile( './html/NearBy.html',rootPath);
});
module.exports = router;