'use strict';
module.exports = mongoose => {
    const UserSchema = new mongoose.Schema({
        name: { type: String },
        password: { type: String },
        createAt: { type: Date },
    });

    return mongoose.model('User', UserSchema);
};