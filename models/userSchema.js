const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Name: { type: String, unique: true, required: true },
  Email: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
  Role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const user = mongoose.model('User', userSchema);

module.exports = user;
