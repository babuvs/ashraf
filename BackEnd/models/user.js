const mongoose = require('mongoose');

const user = mongoose.Schema({
    token: {
        type: String,
        require: [true, 'token is mandatory']
    },
    name: {
        type: String,
        nullable: true
    },
    phoneNumber: {
        type: String,
        require: [true, 'phone number is mandatory']
    },
    email: {
        type: String,
        require: [true, 'phone number is mandatory']
    },
    isActive: {
        type: Boolean,
        require: [true, 'isActive is mandatory'],
        default: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    modifiedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('user', user);