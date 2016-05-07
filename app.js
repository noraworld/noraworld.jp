var express   = require('express'),
    app       = express(),
    logger    = require('morgan'),
    hbs       = require('express-hbs'),
    fs        = require('fs'),
    config    = require('./config'),
    date      = require('date-utils'),
    dt        = new Date(),
    formatted = dt.toFormat('YYYY');

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
app.locals.year = formatted;
app.locals.home = {
  title: 'Noraworld',
  url: config.url,
  icon: '../images/favicon.png'
};
app.locals.blog = {
  title: 'Noraworld Blog',
  url: config.url + '/blog',
};
app.locals.about = {
  title: 'About',
  url: config.url + '/about',
}
app.locals.works = {
  niconicommander: {
    title: 'ニコニコマンダー',
    url: config.url + '/works/niconicommander'
  }
}

// Routing
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Noraworld',
  });
});
app.get('/about', function(req, res) {
  res.render('about', {
    title: 'About'
  });
});
app.get('/works/niconicommander', function(req, res) {
  res.render('works/niconicommander', {
    title: 'niconicommander'
  });
});

// Error page
app.use(function(req, res) {
  res.status(404).render('404', {
    title: '404 Not Found'
  });
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
