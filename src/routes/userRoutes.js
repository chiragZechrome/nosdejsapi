const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

// All user data retrieval route
router.get('/', auth, userController.getAllData);

// Single user data retrieval route
router.get('/:userId', auth, userController.getDataById);

//Add user data route
router.post('/create', auth, userController.addData);

//Update user data route
router.put('/update/:userId', auth, userController.updateDataByID);

//Delete user data route
router.delete('/delete/:userId', auth, userController.deleteDataByID);

module.exports = router;
