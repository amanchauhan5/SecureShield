const mongoose = require('mongoose');
const User = require('../models/userModel')

// get all users

const getallUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
}

//get a single user
const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such user' });
  }

  const user = await User.findById(id);
  if (!user) {
    return res.status(400).json({ error: 'No such user' });
  }
  res.status(200).json(user);
}

// crete a new user
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such user' });
  }

  const user = await User.findOneAndDelete({ _id: id }, { new: true });

  if (!user) {
    return res.status(400).json({ error: 'No such user' });
  }
  res.status(200).json(user);
}

//update a user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such user' });
  }
  const user = await User.findOneAndUpdate({ _id: id }, {
    ...req.body
  }, { new: true });

  if (!user) {
    return res.status(400).json({ error: 'No such user' });
  }
  res.status(200).json(user);
}

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getallUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  loginUser
};