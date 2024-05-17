const { createServer } = require('node:http');

var fs = require('fs');

const server = createServer((req, res) => {
  let url = req.url;
  if(url === '/cinnabac.css') {
    fs.readFile('cinnabac.css', function(err,data){
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      return res.end();
    });
    return;
  }

  let file = '';
  if(url === '/') {
    file = 'about.html';
  }
  else if(url === '/about') {
    file = 'about.html';
  }
  else if(url === '/projects') {
    file = 'projects.html';
  }
  else if(url === '/contact') {
    file = 'contact.html';
  }
  fs.readFile(file, function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


