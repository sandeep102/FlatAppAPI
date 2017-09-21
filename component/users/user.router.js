import express from 'express'
import Users from './user.controller'

let router = express.Router();

router.route('/register')
    .post(Users.create_user);

router.route('/login')
    .post(Users.authenticate);

export default router