const User = require('../models/user');
// const bcrypt = require('bcrypt');

// Controller function for getting data from dataBase
const getAllData = async (req, res) => {
  try {
    const result = await User.find().sort({userId:1}).exec();
    if (!result) {
      console.log('User not found');
      res.status(404).send('User not found');
    } else {
      console.log('Found user:', result);
      res.send(result);
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Controller function for getting data from dataBase by id
const getDataById = async (req, res) => {
  const userId = Number(req.params.userId);
  try {
    const result = await User.findOne({ userId }).exec();
    if (!result) {
      console.log('User not found');
      res.status(404).send('User not found');
    } else {
      console.log('Found user:', result);
      res.send(result);
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Controller function for insert data in dataBase
const addData = async (req, res) => {
  let data = new User(req.body);
  console.log(data)
  const result = await data.save();
  res.send(result);
};

// Controller function for edit data from dataBase by id
const updateDataByID = async (req, res) => {
  const userId = Number(req.params.userId);
  try {
    const result = await User.findOneAndUpdate(
      { userId: userId },
      { $set: req.body },
      { new: true }
    ).exec();
    if (!result) {
      console.log('User not found');
      res.status(404).send('User not found');
    } else {
      console.log('Found user:', result);
      res.send(result);
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Controller function for delete data from dataBase by id
const deleteDataByID = async (req, res) => {
  const userId = Number(req.params.userId);
  try {
    const result = await User.findOneAndDelete({ userId }).exec();
    if (!result) {
      console.log('User not found');
      res.status(404).send('User not found');
    } else {
      console.log('Found user:', result);
      res.send(result);
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).send('Internal Server Error');
  }
};


module.exports = {
  getAllData,
  getDataById,
  addData,
  updateDataByID,
  deleteDataByID,
};
