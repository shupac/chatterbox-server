/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */

var handleRequest = function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
  var statusCode = 200;

  var defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10 
  };

  var headers = defaultCorsHeaders;

  headers['Content-Type'] = "text/plain";

  response.writeHead(statusCode, headers);
  var responseJSON = {"results":[{"username":"anonymous","text":"Hi, I'm Emma","roomname":"lobby","createdAt":"2013-10-14T22:21:34.714Z","updatedAt":"2013-10-14T22:21:34.714Z","objectId":"vE6uIJezqp"}]};

  response.end(JSON.stringify(responseJSON));
};

exports.handleRequest = handleRequest;
