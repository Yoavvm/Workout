const logic = require('./logic');

const getAll = async (req, res) => {

    try {
        const allExercises = await logic.getAll();
        res.json({ allExercises });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'something went wrong' });
    }
}

const login = async (req, res) => {
    try {
        const userData = await logic.login(req.body);
        res.json(userData);

    } catch (error) {
        console.log(error)
        res.status(400).json(error);

    }
}

const register = async (req, res) => {
    try {
        const response = await logic.register(req.body);
        res.json(response);

    } catch (error) {
        console.log(error)
        res.status(400).json(error);

    }
}

module.exports = {
    getAll,
    login,
    register
}