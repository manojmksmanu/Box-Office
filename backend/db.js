const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:8wFPzEcfczo1ZFc1@cluster0.qsqaf71.mongodb.net/box-office");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minLength: 6
    },
    firstName: {
        type: String,
        required: [true, 'Please add first name'],
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: [true,'Please add last name'],
        trim: true,
        maxLength: 50
    }
});


const movieSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User', // if a user only with some id can put money here
        required: true
    },
    favouriteId: {
        type: Number,
        required: true
    },

    showName: {
        type: String,
        required: true
    }
});

// mongoose.model('Account', accountSchema):
//  This creates a model named Account using the accountSchema. Mongoose will look for a collection named accounts in the database.

const Movie = mongoose.model('Movie', movieSchema);  
const User = mongoose.model("User", userSchema);

module.exports = {
	User,
    Movie
};