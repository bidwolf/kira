exports.home = (req, res) => res.render('home');
exports.notFound = (req, res) => {
    res.status(404);
    res.render('404');
};
exports.serverError = (err, req, res, next) => {
    res.status(500);
    res.render('500');
};