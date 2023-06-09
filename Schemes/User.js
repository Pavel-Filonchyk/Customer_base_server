import mongoose from 'mongoose'


const User = new mongoose.Schema({          
    userName : {type: String, unique: true, required: true},
    password : {type: String, required: true},
    roles: [{type: String, ref: 'Role'}], 
    email: String,
    value: String
})

export default mongoose.model('User', User)
