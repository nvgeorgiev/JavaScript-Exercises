const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const saltRound = config.saltRound;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.comparePasswords = function (providedPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(providedPassword, this.password, function (err, result) {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

userSchema.pre('save', function (done) {
  if (this.isNew || this.isModified('password')) {
    bcrypt.genSalt(saltRound, (err, salt) => {
      if (err) {
        done(err);
        return;
      }
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          done(err);
          return;
        }
        this.password = hash;
        done();
      });
    });
  }
});

module.exports = new mongoose.model('user', userSchema);