const User = require("../models/User.model");
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

module.exports = {
  auth: async (req, res, next) => {
    try {
      const user = await User.findById(req.userId)
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "User not found" });
      res.json({ success: true, user: {
        id: user._id,
        role: user.role,
        username: user.username
      } });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  login: async (req, res, next) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password)
      return res
        .status(400)
        .json({ success: false, message: "Missing username and/or password" });

    try {
      // Check for existing user
      const user = await User.findOne({ username });
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "Incorrect username or password" });

      // Username found
      const passwordValid = await argon2.verify(user.password, password);
      if (!passwordValid)
        return res
          .status(400)
          .json({ success: false, message: "Incorrect username or password" });

      // All good
      // Return token
      const accessToken = jwt.sign(
        { userId: user._id },
        'secret'
      );

      res.json({
        success: true,
        message: "User logged in successfully",
        accessToken,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  register: async (req, res, next) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password)
      return res
        .status(400)
        .json({ success: false, message: "Missing username and/or password" });

    try {
      // Check for existing user
      const user = await User.findOne({ username });

      if (user)
        return res
          .status(400)
          .json({ success: false, message: "Username already taken" });

      // All good
      const hashedPassword = await argon2.hash(password);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();

      // Return token
      const accessToken = jwt.sign(
        { userId: newUser._id },
        'secret'
      );

      res.json({
        success: true,
        message: "User created successfully",
        accessToken,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  changePassword: async (req, res, next) => {
    const { password, newPassword } = req.body;

    // Simple validation
    if (!password)
      return res
        .status(400)
        .json({ success: false, message: "Missing password" });
    if(!newPassword)
      return res
        .status(400)
        .json({ success: false, message: "Missing new password" });

    try {
      // Check for existing user
      const user = await User.findById(req.userId);
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "User not found" });
      if(!await argon2.verify(user.password, password)) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect password" });
      }
      // All good
      const hashedPassword = await argon2.hash(newPassword);
      user.password = hashedPassword;
      await user.save();

      res.json({
        success: true,
        message: "Password changed successfully",
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
};
