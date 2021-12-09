const expres = require('express');
const Router = expres.Router();


const { UserLogin, UserRegister, GetALlUsersOrStudents } = require('../controllers/UserManagementController');
const {UploadUserImage} = require('../libraryfiles/UploadUserImage');


//Embdedded Data Route
Router.post('/UserLogin',UserLogin);
Router.post('/UserRegister',UserRegister );
Router.get('/GetALlUsersOrStudents',GetALlUsersOrStudents);

module.exports = Router;