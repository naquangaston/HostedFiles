var http = require('http'),
    util = require('util'),
    formidable = require('formidable'),
    server;

server = http.createServer(function(req, res) {
  if (req.url == '/') {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
      "<div align='center'>"+
      "<form action='/uploadImage' enctype='multipart/form-data' method='post'>"+
      "<p><input type='file' name='upload' multiple='multiple'></p>"+
      "<input type='submit' value='Subir Archivo'>"+
      "</form></div>"
    );
  } else if (req.url == '/uploadImage') {
    var form = new formidable.IncomingForm(),
        files = [],
        fields = [];

    //La ruta donde tendrán el archivo (usé la misma para mi proyecto)
    //Carpeta temporal
    form.uploadDir = '/Users/yesidiaz/Documents/nodejs';

    form
      .on('field', function(field, value) {
        fields.push([field, value]);
      })
      .on('file', function(field, file) {
        files.push([field, file]);
      })
      .on('end', function() {
        console.log('Upload terminado');
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Caracteristicas del archivo:\n\n '+util.inspect(files, true, null));
      });
    form.parse(req);
  } else {
    res.writeHead(404, {'content-type': 'text/plain'});
    res.end('404');
  }
});
server.listen(3000);

console.log('Servidor ON - @silvercorp | @codejobs');