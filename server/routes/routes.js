const router = require('express').Router();

const exerciseController = require('../exercises/controller')
const userController = require('../users/controller');

router.get('/exercises', exerciseController.getAllExercises);
router.put('/exercises', exerciseController.createExercise);
router.delete('/exercises/:id', exerciseController.deleteExercise);


router.post('/users', userController.login);
router.put('/users', userController.register);
router.patch('/users', userController.addWorkout);


module.exports = router;
