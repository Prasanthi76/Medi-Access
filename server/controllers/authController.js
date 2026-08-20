const User = require("../models/User");

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password, role } = req.body;

    // Email or mobile must be provided
    if (!email && !mobile) {
      return res.status(400).json({
        message: "Email or mobile number is required",
      });
    }

    // Check existing email
    if (email) {
      const existingEmail = await User.findOne({ email });

      if (existingEmail) {
        return res.status(400).json({
          message: "Email already registered",
        });
      }
    }

    // Check existing mobile
    if (mobile) {
      const existingMobile = await User.findOne({ mobile });

      if (existingMobile) {
        return res.status(400).json({
          message: "Mobile number already registered",
        });
      }
    }

    const user = await User.create({
      name,
      email: email || undefined,
      mobile: mobile || undefined,
      password,
      role: role || "patient",
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, mobile, password } = req.body;

    if (!email && !mobile) {
      return res.status(400).json({
        message: "Email or mobile number is required",
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "Password is required",
      });
    }

    let user;

    if (email) {
      user = await User.findOne({ email });
    } else {
      user = await User.findOne({ mobile });
    }

    if (!user) {
      return res.status(401).json({
        message: "Invalid email/mobile or password",
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid email/mobile or password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};