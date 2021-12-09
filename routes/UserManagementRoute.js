const expres = require('express');
const Router = expres.Router();


const { UserLogin, UserRegister, GetALlUsersOrStudents } = require('../controllers/UserManagementController');


//Embdedded Data Route
Router.post('/UserLogin',UserLogin);
Router.post('/UserRegister',UserRegister );
Router.get('/GetAllUsers',GetALlUsersOrStudents);

module.exports = Router;