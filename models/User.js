const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            required: true
        },
        jobTitle: {
            type: String,
            trim: true
        },
        twitter: {
            type: String,
            trim: true
        }
    });

module.exports = mongoose.model('Users', usersSchema);