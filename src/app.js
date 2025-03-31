const express = require('express');
const helmet = require('helmet');
const app = express();

// Use Helmet for security headers
app.use(helmet());

// Serve EJS templates
app.set('view engine', 'ejs');
app.set('views', './views');

// Basic route
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to DevSecOps!' });
});

module.exports = app;
