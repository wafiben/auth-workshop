const isAdmin = (req, res, next) => {
  console.log(req.user);
  try {
    if (req.user.role == 0) {
      res.status(400).json({ msg: "only admin has the right" });
    }
    if (req.user.role === 1) {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = isAdmin;
