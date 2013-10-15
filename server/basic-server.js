var http = require("http");
var url = require('url');
var requestHandler = require("./request-handler.js");

// var port = process.env.port || 8080;
// var ip = process.env.IP || "127.0.0.1";

var server = http.createServer( function(req, res) {
  var route = url.parse(req.url).pathname;
  var handler;

  switch(route) {
    case 'classes/messages':
      handler = requestHandler.handleRequest;
      break;
    case '/':
      handler = requestHandler.handleRequest;
      break;
    default:
      // handler = requestHandler.handleRequest;
      break;
  }
  handler.call(req, res);
});

server.listen(process.env.PORT || 5000);





  // requestHandler.handleRequest).listen(process.env.PORT || 5000);
// console.log("Listening on http://" + ip + ":" + port);
