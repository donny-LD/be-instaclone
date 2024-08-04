const { Router } = require('express');
const userRouter = Router();

const { signup, login } = require('./controllers');

const { hashPass, comparePass } = require('../middleware/auth');

userRouter.post("/signup", hashPass, signup);

userRouter.post("/login", comparePass, login);


module.exports = userRouter;


