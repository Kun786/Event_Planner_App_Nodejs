//Dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SaltRounds = 10;


//Start Block Schema Creating
const AdminRegisterSchema = mongoose.Schema({
    Name: { type: String, required: true, unique:true},
    Email: { type: String, required: true, unique:true},
    Mobile: { type: Number, required: true },
    Password: { type: String, required: true },
    CreatedDate: { type: Date, default: Date.now },
    SaltString:{type:String},
    Status:{type:Number, default:1}
})

AdminRegisterSchema.pre('save', function(next){
    bcrypt.genSalt(SaltRounds,(err,salt)=>{
        if(salt){
        this.SaltString=salt;
        bcrypt.hash(this.Password,salt,(err,hash)=>{
            this.Password=hash;
            next();
        })
    }
    else {
        res.json({
            Error:err.message
        })
    }
    })
});
//End Block Schema Creating

//Exporting The Schema
module.exports = mongoose.model('AdminRegisterCollection', AdminRegisterSchema);


