//Dependencies
const express = require('express');
const Router = express.Router();

//Accquiginr Library Files
const { UploadServiceImage } = require('../libraryfiles/UploadUploadServiceImageImage');
//Accquiring Controllers
const { AddService, GetAllServices, DeleteById, GetServiceById, UpdateServiceById } = require('../controllers/ServiceManagementController');


//Routes
Router.post('/AddService',UploadServiceImage.single('ServiceImage'),AddService);
Router.get('/GetAllServices',GetAllServices);
Router.delete('/DeleteById/:_ServiceId',DeleteById);
Router.get('/GetServiceById/:_ServiceId',GetServiceById);
Router.post('/UpdateServiceById/:_ServiceId',UploadServiceImage.single('ServiceImage'),UpdateServiceById);

module.exports = Router;