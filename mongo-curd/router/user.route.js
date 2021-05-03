const express = require('express');
const UserController = require('../controller/user.controller');
const router = express.Router();

router.post('/user', UserController.create );
router.get('/user', UserController.getUsers );

//Write code for update and delete
router.patch('/user/:id', UserController.updateUser );
router.delete('/user/:id', UserController.deleteUser );

module.exports = router;