
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Paper 2' })
};

exports.workscited = function(req, res) {
	res.render('workscited', { title: 'Works Cited' })
}