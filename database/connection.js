import mongoose from 'mongoose';

const conn = mongoose.connect("mongodb://localhost:27017/omkar");

mongoose.connection.on('connected', function (ref) {
    connected = true;
    console.log('connected to mongo server.');
});

mongoose.connection.on('error', function (err) {
    connected = false;
    console.log('error connection to mongo server!');
    console.log(err);
});

export default conn;