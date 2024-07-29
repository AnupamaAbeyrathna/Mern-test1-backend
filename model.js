const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id : Number,
    name : String,
});

userSchema.statics.updateUser = function(id, updateData) {
    return this.findOneAndUpdate(id, updateData, { new: true });
};

const User = mongoose.model('User', userSchema);

module.exports = User;