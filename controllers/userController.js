const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for password updates', 400));
  }

  res.status(200).json({
    status: 'success',
  });
});

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messa: 'Route not defined!',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messa: 'Route not defined!',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messa: 'Route not defined!',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messa: 'Route not defined!',
  });
};
