const express = require('express');
const router = express.Router();
const userRouter = require("./user");
const movieRouter = require("./movie");

router.use("/user", userRouter);
router.use("/movie", movieRouter );

module.exports = router;

///api/v1/user
///api/v1/transaction......