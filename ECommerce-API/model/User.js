
const mongoose = require("mongoose");
const { BUYER, SELLER } = require("../constant/role")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
  },

  email: {
    // unique:true,
    type: String,
    required: true,
    /* custom mongoose validation  -- check email here.. */
    validate: {
      validator: async (value) => {
        let matched = await mongoose.models.User.findOne({ email: value });
        if (matched) {
          return false;
        }
      },
      message: "email already used",
    },
  },

  role: {
    type: String,
    required: true,
    enum: [BUYER, SELLER],
    set: (value) => {
      console.log(value);
      return value.toLowerCase()
    }
  },

  phone: {
    type: Number,
    minLength: 10,
    maxLength: 10,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
    minLength: 8,
  },
});

const User = mongoose.model("User", UserSchema)
module.exports = User;