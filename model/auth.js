import mongoose from 'mongoose';
import { hash } from 'bcrypt';
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    }
});

UserSchema.pre("save", async function (next) {
    const user = this; // userSchema를 가르킴
  
    if (user.isModified('key')) {
      // password가 변경될 때만 Hashing 실행
      const encrypted = await hash(user.key, 10);
      user.key = encrypted;
    }
    else {
      // password가 변경되지 않을 때
      next(); // 바로 save로 넘어감
    }
  });

export default mongoose.model('User', UserSchema);