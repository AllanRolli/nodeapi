module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = res.session.user

    return next()
  }

  return res.redirect('/')
  // eslint-disable-next-line semi
};
