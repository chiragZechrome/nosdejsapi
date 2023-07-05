const express = require('express');
const router = express.Router();
const credentialController = require('../controllers/credentialController');

// signup route
router.post('/signup', credentialController.signUp);

// signin route
router.post('/signin', credentialController.signIn);

module.exports = router;
