import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username must be 5 characters or more.'],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'Password must be 5 characters or more.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// write some encryption for Password

const User = mongoose.model('User', userSchema);
export default User;
// 23'34'' https://www.youtube.com/watch?v=gtMZ-WiSrs8&t=9s
