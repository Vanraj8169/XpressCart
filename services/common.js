const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjU1NTA0ZDdhNTQ0OTFlZGRhNjc0OSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg5NzA2OTI0fQ.54ZAJvDPy-NYEqb3t9ZpwGk6O7tQ2_F6F9vo08Lu-QY";
  return token;
};
