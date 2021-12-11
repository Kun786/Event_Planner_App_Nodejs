//Dependencies
const mongoose = require('mongoose');


//Start Block Schema Creating
const CustomBookServicerSchema = mongoose.Schema({
    Plan:{ type: String, required: true },
    PlanPrice:{ type: Number, required: true },
    ClientName: { type: String, required: true },
    EventType: { type: String, required: true },
    ClientMobile: { type: Number, required: true },
    NumberOfPersons: { type: Number, required: true },
    ClientCNINC: { type: Number, required: true },
    EventDate: { type: String, required: true },
    EventTime: { type: String, required: true },
    EventLocation: { type: String, required: true },
    PaymentMethod: { type: String, required: true },
    CreatedDate: { type: Date, default: Date.now },
    SaltString:{type:String},
    BookingStatus:{type:Number, default:0}
})
//End Block Schema Creating

//Exporting The Schema
module.exports = mongoose.model('CustomBookServicerCollection', CustomBookServicerSchema);
