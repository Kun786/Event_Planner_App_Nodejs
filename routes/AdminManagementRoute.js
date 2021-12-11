const expres = require('express');
const Router = expres.Router();


const { AdminRegister, GetAllAvailServicesUsers, GetAllServiceProviderUsers} = require('../controllers/AdminManagementRegisterController');
const _AdminManagementLoginController = require('../controllers/AdminManagementLoginController');

//Embdedded Data Route
Router.post('/AdminLogin',_AdminManagementLoginController.AdminLogin);
Router.post('/AdminRegister',AdminRegister);
Router.get('/GetAllAvailServiceUsers',GetAllAvailServicesUsers);
Router.get('/GetAllServiceProviderUsers',GetAllServiceProviderUsers);
module.exports = Router;