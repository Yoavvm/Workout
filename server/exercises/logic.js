const { verifyPermission } = require('../utils/jwtUtil');
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

const deleteExercise = async (token, deletedId) => {

    if (!verifyPermission(token)){
        throw new Error('unauthorized action')
    }

    await repo.deleteExercise(deletedId) 
    

    const allExercises = await repo.getAllExercises();
    return allExercises;
}


module.exports = {
    getAllExercises,
    createExercise,
    deleteExercise

}