// Renders an HTML page
exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' }); // res.render renders an HTML page from a template; in this case, the HTML rendered comes from index.pug
}