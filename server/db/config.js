const { connect } = require('mongoose');

const connectToMongoDB = async () => {
    try {
        await connect('mongodb://localhost/workOutApp');
        console.log('mongo db connected ✅')
    } catch (error) {
        console.log('failed to connect with mongo DB ✖');
        console.log(error);
    }
}

module.exports = {
    connectToMongoDB
}