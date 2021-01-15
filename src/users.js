const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let user_info = new Schema({

  id: {
    type: Number
  },
  name: {
    type: String
  },
  lastname:{
    type: String
  },
  username:{
      type: String
  },
  email:{
      type: String
  },
  password_hashed:{
      type: Number
  }
});

module.exports = mongoose.model("user_info", user_info);