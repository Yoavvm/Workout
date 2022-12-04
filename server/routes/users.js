const router = require('express').Router();

const userController = require('../users/controller');

router.post('/', userController.login);
router.put('/', userController.register);
router.patch('/', userController.addWorkout);

module.exports = router;
