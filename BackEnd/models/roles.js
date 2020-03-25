const mongoose = require('mongoose');

const role = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'RoleName is mandatory']
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

module.exports = mongoose.model('role', role);