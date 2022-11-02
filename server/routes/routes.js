const router = require('express').Router();

const exerciseController = require('../exercises/controller')
const userController = require('../users/controller');

router.get('/exercises', exerciseController.getAllExercises);
// router.put('/exercises', exerciseController.createExercise);


router.post('/users', userController.login);
router.put('/users', userController.register);


module.exports = router;
