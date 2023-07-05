const Credential = require('../models/credential');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

// Controller function for sign up
const signUp = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const existingUser = await Credential.findOne({ userName: userName });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await Credential.create({
      userName: userName,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { userName: result.userName, id: result._id },
      SECRET_KEY
    );
    res.status(201).json({ credential: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'something went wrong' });
  }
};

const signIn = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const existingUser = await Credential.findOne({ userName: userName });
    // console.log(existingUser.password);
    if (existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (isMatch) {
        const token = jwt.sign(
          { userName: existingUser.userName, id: existingUser._id },
          SECRET_KEY
        );
        return res.status(200).json({ credential: existingUser, token: token });
      } else {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
    } else {
      return res.status(400).json({ message: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'something went wrong' });
  }
};

module.exports = {
  signUp,
  signIn,
};
