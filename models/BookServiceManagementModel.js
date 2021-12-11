//Dependencies
const mongoose = require('mongoose');


//Start Block Schema Creating
const BookServicerSchema = mongoose.Schema({
    Plan:{ type: String, required: true },
    PlanPrice:{ type: Number, required: true },
    ClientName: { type: String, required: true },
    ClientEmail: { type: String, required: true },
    ClientMobile: { type: Number, required: true },
    ClientCNINC: { type: Number, required: true },
    EventDate: { type: String, required: true },
    EventTime: { type: String, required: true },
    PaymentMethod: { type: String, required: true },
    CreatedDate: { type: Date, default: Date.now },
    SaltString:{type:String},
    BookingStatus:{type:Number, default:0}
})
//End Block Schema Creating

//Exporting The Schema
module.exports = mongoose.model('BookServicerCollection', BookServicerSchema);
