//Dependencies 
const mongoose = require('mongoose');

//Date
const _Today = new Date();
const _Day = _Today.getDate();
const _Month = _Today.getMonth();
const _Year = _Today.getFullYear();

const _ServiceManagementSchema =  mongoose.Schema({
    BasicPlan:{type:String,default:'Basic'}, //Yahan Basic, Standard aur Premimum ke category aye ge
    BasicPrice:{type:Number,required:true},
    BasicDescription:{type:String,requird:true},
    StandardPlan:{type:String,default:'Standard'}, //Yahan Standard, Standard aur Premimum ke category aye ge
    StandardPrice:{type:Number,required:true},
    StandardDescription:{type:String,requird:true},
    PremiumPlan:{type:String,default:'Premium'}, //Yahan Premium, Standard aur Premimum ke category aye ge
    PremiumPrice:{type:Number,required:true},
    PremiumDescription:{type:String,requird:true},
    MainCategory:{type:String,required:true},// Yahan Photography , VideoGraphy, Catering, Decore 
    CardDescription:{type:String,required:true}, //Yeh Descirpiotn Card pay ani hai
    ImageUrl: { type: String },
    ImageName: { type: String },
    ImageMimeType: { type: String }
},{timestamp:true});

//ExportThe Model
module.exports = mongoose.model('ServiceManagementCollection',_ServiceManagementSchema)