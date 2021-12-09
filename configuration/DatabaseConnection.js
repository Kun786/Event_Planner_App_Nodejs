// Dependencies
// const mongoose = require('mongoose');
// const Package = require('../package.json');

// Block Start Connecting To DB (Main)
// const DB_Connection = mongoose.connect(process.env.Mongo_URI, 'mongodb+srv://scriptoneProduction:Jrj3agqpq@focuscrmcluster.bezzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// });
// DB_Connection.then('open', () => {
//     console.log('\nMogoDb Connected Successfuly at MongoAtlas with Database Name ScriptOneTestingDataBase\n');
//     console.log("Your App Has the Following Dependicies\n");
//     for (dependencies in Package.dependencies) {
//         console.log(dependencies);
//     }
// }).catch(err => {
//     console.log('Error Connecting to DB' + ' ' + err)
// });

const Package= require('../package.json');
const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://event:event@eventplaner.t9dqb.mongodb.net/EventPlaner?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true},(error)=>{
    if(!error){
        console.log('\nMogoDb Connected Successfuly at 27017 with Database Name EventPlanner\n');
        console.log("Your App Has the Following Dependicies\n");
        for(dependencies in Package.dependencies){
            console.log(dependencies);
        }
    }
    else{console.log('Error: Not Connected to the MongoDb' + error)}
});

// Block End Connecting To DB (Main)

// Require Models For DB
// const EmbeddedDataSchema = require('../models/EmdeddedDataModel');

// // Load Models
// const _EmdeddedData_Collection = mongoose.model('EmbeddedData', EmbeddedDataSchema);
// console.log(_EmdeddedData_Collection);

// // Exporting Models
// module.exports = {
//     _EmdeddedData_Collection
// };