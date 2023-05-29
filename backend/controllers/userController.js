// @desc    Auth user/set Token
// route    POST /api/users/auth
// @access  Public
const authUser = (res, req) => {
  res.status(200).json({ message: "Auth User" });
};

export { authUser };
