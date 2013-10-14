/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */
var _storage = [];

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

  if (request.method === 'POST') {
    // _storage.push()
    var requestBody = '';
    request.on('data', function(data) {
      // console.log(data);
      requestBody += data;
      console.log(requestBody);
    });
    // request.on('end', function() {
    //   var formData = qs.parse(requestBody);
    //   response.writeHead(201, {'Content-Type': 'text/html'});
    //   response.write('<!doctype html><html><head><title>response</title></head><body>');
    //   response.write('Thanks for the data!<br />User Name: '+formData.UserName);
    //   response.write('<br />Repository Name: '+formData.Repository);
    //   response.write('<br />Branch: '+formData.Branch);
    //   response.end('</body></html>');
    // });
  } else if (request.method === 'GET'){

  }





  response.end(JSON.stringify(responseJSON));
};

exports.handleRequest = handleRequest;










  var responseJSON = {response: _storage}; // GET
