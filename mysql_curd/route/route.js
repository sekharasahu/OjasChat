const express = require('express');
const Emp = require('../controller/controller');
const router = express.Router();

router.post('/employee', Emp.create);
router.get('/employee', Emp.getUser);
router.put('/employee', Emp.updateUser);
router.delete('/employee', Emp.deletUser);


module.exports = router;