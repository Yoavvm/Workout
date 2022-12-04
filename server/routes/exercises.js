const router = require('express').Router();

const exerciseController = require('../exercises/controller')

router.get('/', exerciseController.getAllExercises);
router.put('/', exerciseController.createExercise);
router.delete('/:id', exerciseController.deleteExercise);

module.exports = router;
