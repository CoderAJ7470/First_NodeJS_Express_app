// Renders an HTML page
exports.getLanding = function(req, res, next) {
  res.render('landing', { title: 'Express' }); // res.render renders an HTML page from a template; in this case, the HTML rendered comes from index.pug
}