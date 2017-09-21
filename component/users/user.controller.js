import Users from './user.model';

function authenticate(req, res) {
    Users.find(req.body,function (err, result) {
        if(err)
            res.send({error: err.message})
        // var val = JSON.parse(JSON.stringify(result[0]))
        // if(val !== null){
        //     res.json({id: val._id})
        // }
        res.json(result)
    });
};

function create_user(req, res) {
    var create_user = new Users(req.body)
    create_user.save(function (err, user) {
        if (err)
            res.send(err.message)
        res.json(user)
    })
};

export default { authenticate, create_user }