const expres = require('express');
const Router = expres.Router();


const _AdminManagementRegisterController = require('../controllers/AdminManagementRegisterController');
const _AdminManagementLoginController = require('../controllers/AdminManagementLoginController');

//Embdedded Data Route
Router.post('/AdminLogin',_AdminManagementLoginController.AdminLogin);
Router.post('/AdminRegister',_AdminManagementRegisterController.AdminRegister);
module.exports = Router;