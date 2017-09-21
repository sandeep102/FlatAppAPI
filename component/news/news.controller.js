import News from './news.model';

function fetchNews(req,res) {
    // fetch news
    News.find({},function (err,result) {
        if(err)
            res.send(err.message);
        res.json(result)
    });
};

export default { fetchNews };
