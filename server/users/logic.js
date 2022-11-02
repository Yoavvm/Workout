const { encryptPassword } = require('../utils/jwtUtil');

const repo = require('./repo')

const getAll = async () => {

    // const allExercises = await repo.getAll();
    // return allExercises;

    return { string: "get all" }
}

const login = async (loginPayload) => {

    loginPayload.encryptedPassword = encryptPassword(loginPayload.password)

    const userData = await repo.login(loginPayload);
    return userData;
}

const register = async (registerPayload) => {

    registerPayload.encryptedPassword = encryptPassword(registerPayload.password)
    console.log(registerPayload)

    const response = await repo.register(registerPayload)
    return response;
}


module.exports = {
    getAll,
    login,
    register

}