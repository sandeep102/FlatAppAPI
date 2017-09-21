/**
 * Created by lcom21 on 28/8/17.
 */
import express from 'express'
import Users from './users/user.router'
import News from './news/news.router'

let router = express.Router()

// mount users route
router.use(Users);

// mount news route
router.use(News);
    
router.route('/')
    .get(function (req,res) {
        res.send({message:'server running...'});
    });
export default router
