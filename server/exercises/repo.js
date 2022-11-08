const { Exercise } = require('../db/models');

const getAllExercises = async () => {
    const allExercises = await Exercise.find()
    return allExercises;
}

const createExercise = async (payload) => {
    console.log(payload)
    const newExercise = await Exercise(payload)
    await newExercise.save()
    return;
}

const deleteExercise = async (payload) => {
    console.log(payload)
    await Exercise.findByIdAndRemove(payload)
    return;
}

module.exports = {
    getAllExercises,
    createExercise,
    deleteExercise
}

