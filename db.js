// connection between express app and mongodb

const mongoose = require('mongoose');
// const uri = "mongodb://root:example@db:27017/";
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://root:example@db:27017/" , 
        {useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

module.exports = connectDB;
