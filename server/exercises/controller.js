const logic = require('./logic');

const getAllExercises = async (req, res) => {

    try {
        const allExercises = await logic.getAllExercises();
        res.json(allExercises);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'something went wrong' });
    }
}

const createExercise = async (req, res) => {
    try {
        await logic.createExercise(req.body);
        const allExercises = await logic.getAllExercises();
        res.json(allExercises);

    } catch (error) {
        console.log(error)
        res.status(400).json(error);

    }
}

const deleteExercise = async (req, res) => {
    const token = req.headers.authorization;
    const deletedId = req.params.id
    try {
        await logic.deleteExercise(token, deletedId);
        const allExercises = await logic.getAllExercises();
        res.json(allExercises);

    } catch (error) {
        console.log(error)
        res.status(400).json(error);

    }
}

module.exports = {
    getAllExercises,
    createExercise,
    deleteExercise
}