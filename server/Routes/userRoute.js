const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../Controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/admin-register", registerUser);
router.post("/login", loginUser);
//router.get("/find/:userId", findUser); 
//router.get("/all", getUsers);

module.exports = router;
