const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {}, { strict: false }
);

const Users = mongoose.model("User", UserSchema);
module.exports = Users;
