var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    debugger;
    res.send('tttttttt');
    res.write("yxxxy dddWssssorld!");
    res.write("<alert(33)>");
    res.write("<a href='1.html'>1</a>");
    res.end();
 //   res.send('wwwww');

});

module.exports = router;