import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  _creator: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  _post: {
    type: Schema.ObjectId,
    ref: 'Post',
  },
});

const autoPopuateCreator = function (next) {
  this.populate({
    path: '_creator',
    selected: 'username created -_id',
  });
  next();
};

/**
 * this is the same as when we do it the controller
 */
commentSchema.pre('find', autoPopuateCreator);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
// 23'34'' https://www.youtube.com/watch?v=gtMZ-WiSrs8&t=9s
