var fs = require('fs');
var path = require('path');
var util = require('./httpUtils');
var _storage = [];

var messageExtend = function(to){
  to["createdAt"] = new Date();
  return to;
};

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  "Content-Type": "application/json"
};

exports.handleRequest = handleRequest = function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);

  switch (request.method) {
    case 'GET':
      util.sendResponse(response, _storage);
      break;

    case 'POST':
      util.collectData(request, function(data) {
        console.log(data);
      });
      util.sendResponse(response, "", 201);
      break;

    case 'OPTIONS':
      util.sendResponse(response, "");
      break;

    default:
      break;
  }

  // var contentType = function(ext) {
  //   var ct;

  //   switch (ext) {
  //   case '.html':
  //       ct = 'text/html';
  //       break;
  //   case '.css':
  //       ct = 'text/css';
  //       break;
  //   case '.js':
  //       ct = 'text/javascript';
  //       break;
  //   default:
  //       ct = 'text/plain';
  //       break;
  //   }

  //   return {'Content-Type': ct};
  // };

  // var returnFail = function(){
  //   response.writeHead(404);
  //   response.end();
  // };

  // var headers = defaultCorsHeaders;

  // headers['Content-Type'] = "text/plain";
  // var parsedRequest = require('url').parse(request.url);
  // var route = parsedRequest.pathname.split('/')[1];

  // if (route === ''){
  //   fs.readFile('client/index.html', function (err, html) {
  //     if(err) {
  //       throw err;
  //     } else {
  //       response.writeHead(200, {"Content-Type": "text/html"});
  //       response.write(html);
  //       response.end();
  //     }
  //   });
  // } else if (route === 'classes') {
  //   if (request.method === 'POST') {
  //     var requestBody = '';
  //     request.on('data', function(data) {
  //       requestBody += data;
  //       var messageObj = JSON.parse(requestBody);
  //       _storage.push(messageExtend(messageObj));
  //       response.writeHead(postCode, headers);
  //       var responseJSON = {response: "success"};
  //       response.end(JSON.stringify(responseJSON));
  //     });
  //   } else if (request.method === 'GET'){
  //     sendResponse(response, _storage);
  //   } else {
  //     returnFail();
  //   }
  // } else {
  //   var filepath = 'client' + request.url;
  //   var fileext = path.extname(filepath);
  //   path.exists(filepath, function (file) {
  //     if (file) {
  //       fs.readFile(filepath, function (err, content) {
  //         if (err) {
  //           returnFail();
  //         } else {
  //           response.writeHead(200, contentType(fileext));
  //           response.end(content);
  //         }
  //       });
  //     } else {
  //       returnFail();
  //     }
  //   });
  // }
};
