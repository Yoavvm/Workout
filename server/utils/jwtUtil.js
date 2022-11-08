const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const crypto = require('crypto');
const config = require('../config/config.json');

const encryptPassword = (password) => {
    const saltRight = "bhdgfshd@@##$$djcf";
    const saltLeft = "bhdgfshdchdsfjd!!43247832djcf";

    let passwordWithSalt = saltLeft + password + saltRight;
    return crypto.createHash('md5').update(passwordWithSalt).digest('hex');
}

const generateToken = (successfulLoginResponse) => {
    const { _id, role } = successfulLoginResponse
    const _idStr = _id.toString()
    const token = jwt.sign({ _idStr, role }, config.secret);
    return token;
}

const decodeToken = (token) => {
    const decoded = jwt_decode(token);
    return decoded;
}


 const verifyPermission = (token) => {
    const decoded = decodeToken(token);
    console.log(decoded);

    if (decoded.role != 'admin') {
        return false;
    }
    
    return true;
 }

module.exports = {
    generateToken,
    encryptPassword,
    decodeToken,
    verifyPermission
}