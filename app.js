var express = require('express'),
    app     = express(),
    logger  = require('morgan'),
    hbs     = require('express-hbs'),
    fs      = require('fs'),
    config  = require('./config');

// Settings for express-hbs
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// middleware
app.use(logger('dev'));
app.use(express.static(__dirname + '/views'));

// Global Handlebars value
app.locals.home = {
  title: 'Noraworld',
  url: config.url,
  icon: '../images/favicon.png'
};
app.locals.blog = {
  title: 'Noraworld Blog',
  url: config.url + '/blog',
};

// Routing
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Noraworld',
  });
});
app.get('/works', function(req, res) {
  res.render('works', {
    title: 'Works'
  });
});

// Error page
app.use(function(req, res) {
  res.status(404).render('404');
});

// views/partials 内の hbs ファイルをまとめてインクルードできる
fs.readdirSync(__dirname + '/views/partials').forEach(function(fileName) {
  var matches = /^([^.]+).hbs$/.exec(fileName);
  if (!matches) {
    return;
  }
  var name     = matches[1],
      template = fs.readFileSync(__dirname + '/views/partials/' + fileName, 'utf8');
  hbs.registerPartial(name, template);
});

// Server running
app.listen(config.port);
console.log('Server running on port ' + config.port + ' ...');
