// @desc    Verify Admin Password
// @route   POST /api/admin/login
exports.adminLogin = (req, res) => {
  const { password } = req.body;

  if (password === process.env.ADMIN_PASSWORD) {
    res.status(200).json({ success: true, message: "Welcome Boss" });
  } else {
    res.status(401).json({ success: false, message: "Invalid Password" });
  }
};