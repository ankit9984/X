import mongoose from "mongoose";

const userShcema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLenght: 6
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: []
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: []
        }
    ],
    profileImg: {
        type: String,
        default: '',
    },
    coverImg: {
        type: String,
        default: '',
    },
    bio:{
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const User = mongoose.model('User', userShcema);

export default User;