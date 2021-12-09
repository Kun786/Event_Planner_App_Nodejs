//Dependencies
const express = require('express');
const Router = express.Router();

//Accquiginr Library Files
const { UploadServiceImage } = require('../libraryfiles/UploadUploadServiceImageImage');
//Accquiring Controllers
const { AddService, GetAllServices } = require('../controllers/ServiceManagementController');


//Routes
Router.post('/AddService',UploadServiceImage.single('ServiceImage'),AddService);
Router.get('/GetAllServices',GetAllServices);

module.exports = Router;