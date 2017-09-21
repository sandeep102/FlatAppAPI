import express from 'express'
import News from './news.controller'

let router = express.Router();

router.route('/news')
.get(News.fetchNews);

export default router