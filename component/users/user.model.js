import mongoose from 'mongoose'


let UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Please Enter Username'
    },
    email: {
        type: String,
        required: 'Please Enter email'
    },
    password: {
        type: String,
        required: 'Please Enter password'
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('user',UsersSchema);


