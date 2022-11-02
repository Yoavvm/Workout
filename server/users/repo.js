const { User } = require('../db/models');

const login = async ({ email, encryptedPassword }) => {
    const userData = await User.find({ email, password: encryptedPassword })
    return userData;
}

const register = async ({ email, encryptedPassword }) => {
    console.log(encryptedPassword)
    const newUser = await User({ email, password: encryptedPassword })
    await newUser.save()
    return 'user created';
}

module.exports = {
    login,
    register
}