const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const validate = require('../middlewares/validate');
const { userZodSchema } = require('../utils/zodSchemas');

const router = express.Router();

router.post('/signup', validate(userZodSchema), authController.signup);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
