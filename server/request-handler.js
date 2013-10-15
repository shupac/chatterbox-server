/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */
var _storage = [];

var messageExtend = function(to){
  to["createdAt"] = new Date();
  return to;
};


var handleRequest = function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
  var getCode = 200;
  var postCode = 201;
  var failCode = 404;

  var defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10
  };

  var headers = defaultCorsHeaders;

  headers['Content-Type'] = "text/plain";
  console.log(request.url);
  var parseRequest = require('url').parse(request.url);
  if (parseRequest.path.split('/')[1] !== 'classes') {
    response.writeHead(failCode, headers);
    response.end();
  } else {
    if (request.method === 'POST') {
      var requestBody = '';
      request.on('data', function(data) {
        requestBody += data;
        var messageObj = JSON.parse(requestBody);
        _storage.push(messageExtend(messageObj));
        response.writeHead(postCode, headers);
        var responseJSON = {response: "success"};
        response.end(JSON.stringify(responseJSON));
      });
    } else if (request.method === 'GET'){
      var responseJSON = _storage; // GET
      response.writeHead(getCode, headers);
      response.end(JSON.stringify(responseJSON));
    }
  }

};

exports.handleRequest = handleRequest;










