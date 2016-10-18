var http   = require('http');
var path   = require('path');
var fs     = require('fs');
var config = require('./config');

var mimeTypes = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'text/javascript'
};

http.createServer((request, response) => {

  // Request path
  var filepath = 'content' + request.url;

  // The front page routing
  if (filepath === 'content/') {
    fs.readFile(filepath + '/index.html', (err, data) => {
      if (err) {
        console.log(err);
        response.writeHead(500);
        response.end('server error');
        return false;
      }
      else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
        return false;
      }
    });
    return false;
  }

  // The route including the HTML filename extension does not match any routing
  else if (path.extname(filepath) === '.html') {
    response.writeHead(404);
    response.end('not found');
    return false;
  }

  // The CSS and JavaScript file delivery
  else {
    fs.exists(filepath, (fileExists) => {
      if (fileExists) {
        fs.readFile(filepath, (err, data) => {
          if (err) {
            console.log(err);
            response.writeHead(500);
            response.end('server error');
            return false;
          }
          else {
            response.writeHead(200, {'Content-Type': mimeTypes[path.extname(filepath)]});
            response.end(data);
            return false;
          }
        });
        return false;
      }
      else {
        response.writeHead(404);
        response.end('not found');
        return false;
      }
    });
    return false;
  }

}).listen(config.port);

console.log('server running at localhost on port ' + config.port);
