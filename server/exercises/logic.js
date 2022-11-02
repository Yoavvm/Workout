const repo = require('./repo')

const getAllExercises = async () => {

    const allExercises = await repo.getAllExercises();
    return allExercises;

}

const createExercise = async (newExercise) => {

    await repo.createExercise(newExercise);

    const allExercises = await repo.getAllExercises();
    return allExercises;
}


module.exports = {
    getAllExercises,
    createExercise

}