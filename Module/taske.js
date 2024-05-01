const mongoose = require('mongoose')


const taskschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
        trim: true,
        maxlength: [50,'Not allowed more than 20 characters']

    },
    completed:{
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('task', taskschema)