//Block Start Loading The Enviorment Variables
// require('./creds/enviorment');
//Block End Loading The Enviorment Variables

//Block Start for Dependencies
const Database = require('./configuration/DatabaseConnection');
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
//Block End for Dependencies

//Global Constant
const PORT = process.env.PORT || 7777;

//Block Start Initialize the APP
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
//Block End Initialize the APP

//Start Blcok Setting the Headers for you Application
app.all('*', (req, res, next) => {

     // This is how we protect the api
     res.header('Access-Control-Allow-Origin','*');// So it make the header allow to the origin when cross platfrom try to exchange the data
     res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
     if(req.method==='OPTIONS'){
         res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
     //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
  
     }
     next(); //if nothing of the response sent back so next() means other rou
});
//End Block Setting the Headers for you Application

//Start Block Set Static Folders (Absolute)
app.use('/assets',express.static('assets'));
//End Block Set Static Folders (Absolute)

//Start Block Load Routes
//LoadingRoutes in Variable
const _AdminManagementRoute = require('./routes/AdminManagementRoute');
const _UserManagementRoute = require('./routes/UserManagementRoute'); 
const _ServiceManagementRoute = require('./routes/ServiceManagementRoutes');
//LoadingRoutes in Variable

//UsingRoutes
app.use('/AdminManagement',_AdminManagementRoute);
app.use('/UserManagement',_UserManagementRoute);
app.use('/ServiceManagement',_ServiceManagementRoute);
//UsingRoutes

//End Block Load Routes


app.get('*', (req, res) => {
    console.log('Server is runnig');
});


//Start Block Checking Routes As express not found Url not Founded we need to do it explicitly 
app.use((req,res,next)=>{
    const error= new Error('Url not found'); 
    error.status=404; 
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message,
        }
    })
});




//Starting the app
app.listen(PORT,()=>{
    console.log('allow');
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})