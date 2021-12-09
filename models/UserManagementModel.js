const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SaltRounds = 10;

const UserSchema = mongoose.Schema({
    Name: { type: String, required: true },
    // LName: { type: String, required: true},
    // SFN: { type: String, required: true},
    // SLN: { type: String, required: true},
    Email: { type: String, required: true, unique: true },
    Mobile: { type: Number, required: true },
    // Department: { type: String, required: true },
    Category:{type:String,required:true},
    Password: { type: String, required: true },
    Address: { type: String},
    CreatedDate: { type: Date, default: Date.now },
    SaltString: { type: String },
    Status: { type: Number, default: 1 },
    UserStatus: { type:Number, default:0 },
},{timestamp:true});

UserSchema.pre('save', function (next) {
    bcrypt.genSalt(SaltRounds, (err, salt) => {
        if (salt) {
            this.SaltString = salt;
            bcrypt.hash(this.Password, salt, (err, hash) => {
                this.Password = hash;
                next();
            })
        }
        else {
            res.json({
                Error: err.message
            })
        }
    })
});





module.exports = mongoose.model('UserCluster', UserSchema);