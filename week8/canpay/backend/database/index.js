
const mongoose=require('mongoose');

// 1. Created DB connection
if(mongoose.connect('mongodb://localhost:27017/User')){
    console.log("Connecting to MongoDB")
}else{
    console.log("Failed")
}

// 2. Creating schemas
const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        lowercase:true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required:true,
        trim:true,
        minLength:6        
    },
    fristname: {
        type: String,
        required:true,
        trim:true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required:true,
        trim:true,
        maxLength: 50
    }
});

// 3. Creating Model using the Schema which we created
const User= mongoose.model('User', userSchema);

// schema for account table
const accountSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, //reference to User model
        ref: 'User',
        required: true
    },
    balance:{
        type:Number,
        required:true
    }
});

// Model for account using the above schema
const Account= mongoose.model('Account', accountSchema);




module.exports={
    User,
    Account
};
