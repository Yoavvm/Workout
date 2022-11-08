const { encryptPassword, generateToken } = require('../utils/jwtUtil');

const repo = require('./repo')

const getAll = async () => {

    // const allExercises = await repo.getAll();
    // return allExercises;

    return { string: "get all users" }
}

const login = async (loginPayload) => {
    loginPayload.encryptedPassword = encryptPassword(loginPayload.password)

    const userData = await repo.login(loginPayload);
    const token = generateToken(userData);

    const response = {userData, token}
    console.log(response)

    return response;
}

const register = async (registerPayload) => {

    registerPayload.encryptedPassword = encryptPassword(registerPayload.password)

    const response = await repo.register(registerPayload)
    return response;
}

const addWorkout = async(payload) => {
    const response = await repo.addWorkout(payload)
    return response;
}


module.exports = {
    getAll,
    login,
    register,
    addWorkout

}