module.exports = (req, res, next) => {
  if (req.session && !req.session.user) {
    return next()
  }

  return res.redirect('/app/dashboard')
  // eslint-disable-next-line semi
};
