const expres = require('express');
const Router = expres.Router();


const { UserLogin, UserRegister, GetALlUsersOrStudents, GetUserById } = require('../controllers/UserManagementController');


//Embdedded Data Route
Router.post('/UserLogin',UserLogin);
Router.post('/UserRegister',UserRegister );
Router.get('/GetAllUsers',GetALlUsersOrStudents);
Router.get('/GetUserById/:_UserId',GetUserById);
module.exports = Router;