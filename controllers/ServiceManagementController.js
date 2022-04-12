//Accquiring Service Management Model
const _ServiceManagementCluster = require('../models/ServiceManagementModel');
const _BookServicerCluster = require('../models/BookServiceManagementModel');
const _CustomBookServicerCluster = require('../models/CustomBookingServiceModel');
const fs = require('fs');

const AddService = async (req, res) => {
    try {
        const _ServiceToAdd = {
            BasicPrice: req.body.BasicPrice,
            BasicDescription: req.body.BasicDescription,
            StandardPrice: req.body.StandardPrice,
            StandardDescription: req.body.StandardDescription,
            PremiumPrice: req.body.PremiumPrice,
            PremiumDescription: req.body.PremiumDescription,
            MainCategory: req.body.MainCategory,
            Price: req.body.Price,
            CardDescription: req.body.CardDescription,
            MainDescription: req.body.MainDescription,
            ImageUrl: `/assets/Service/${req.file.filename}`,
            ImageName: req.file.originalname,
            ImageMimeType: req.file.mimetype,
        }
        const _SavedData = await _ServiceManagementCluster.create(_ServiceToAdd);
        res.json({
            Message: "Service Saved Successfully",
            Data: true,
            Result: _SavedData
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

const GetAllServices = async (req, res) => {
    try {
        const _GetAllServices = await _ServiceManagementCluster.find();
        res.json({
            Message: 'All Services Found Successfully',
            Data: true,
            Result: _GetAllServices
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

const DeleteById = async (req, res) => {
    try {
        const _GetServiceId = req.params._ServiceId;
        const _GetServiceById = await _ServiceManagementCluster.findById({ _id: _GetServiceId });
        fs.unlinkSync(`.${_GetServiceById.ImageUrl}`);
        const _DeleteServiceById = await _ServiceManagementCluster.deleteOne({ _id: _GetServiceId });
        res.json({
            Message: 'Deleted Successfully',
            Data: true,
            Result: _DeleteServiceById
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

// Update Block Code

const GetServiceById = async (req, res) => {
    try {
        const _GetServiceId = req.params._ServiceId;
        const _GetServiceById = await _ServiceManagementCluster.findById({ _id: _GetServiceId });
        res.json({
            Message: "Service Found Successfully",
            Data: true,
            Result: _GetServiceId
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

const UpdateServiceById = async (req, res) => {
    try {
        const _GetServiceId = req.params._ServiceId;
        const _PayloadToUpdate = req.body;
        const _GetServiceById = await _ServiceManagementCluster.findById({ _id: _GetServiceId });
        const _UpdatedPayload = await _ServiceManagementCluster.updateOne(
            { _id: _GetServiceId },
            {
                $set: {
                    // _PayloadToUpdate,
                    // ImageUrl: `/assets/Service/${req.file.filename}`,
                    // ImageName: req.file.originalname,
                    // ImageMimeType: req.file.mimetype,
                    BasicPrice: req.body.BasicPrice,
                    BasicDescription: req.body.BasicDescription,
                    StandardPrice: req.body.StandardPrice,
                    StandardDescription: req.body.StandardDescription,
                    PremiumPrice: req.body.PremiumPrice,
                    PremiumDescription: req.body.PremiumDescription,
                    MainCategory: req.body.MainCategory,
                    Price: req.body.Price,
                    CardDescription: req.body.CardDescription,
                    MainDescription: req.body.MainDescription,
                    ImageUrl: `/assets/Service/${req.file.filename}`,
                    ImageName: req.file.originalname,
                    ImageMimeType: req.file.mimetype,
                }
            }
        );
        res.json({
            Message: 'Updated Successfully',
            Data: true,
            Result: _UpdatedPayload
        })
    } catch (error) {
        console.log(error.message);
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

const BookServiceByClient = async (req,res) =>{
    try {
        const ServiceToAdd = {
            Plan:req.body.Plan,
            PlanPrice:req.body.PlanPrice,
            ClientName:req.body.ClientName, 
            ClientEmail:req.body.ClientEmail, 
            ClientMobile:req.body.ClientMobile, 
            ClientCNINC:req.body.ClientCNINC, 
            EventDate:req.body.EventDate, 
            EventTime:req.body.EventTime, 
            PaymentMethod:req.body.PaymentMethod 
        }
        const _SavedData = await _BookServicerCluster.create(ServiceToAdd);
        res.json({
            Message:'Saved Successfully',
            Data:true,
            Result:_SavedData
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
} 

const GetAllBookingData = async (req,res) =>{
    try {
        const _GetAllBookingData = await _BookServicerCluster.find();
        res.json({
            Message:'Found Succseefull',
            Data:true,
            Result:_GetAllBookingData
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

const GetAllBookingDataById = async (req,res) =>{
    try {
        const _GetBookingId = req.params._BookId;
        const _GetAllBookingDataById = await _BookServicerCluster.findById({_id:_GetBookingId});
        res.json({
            Message:'Found Succseefull',
            Data:true,
            Result:_GetAllBookingDataById
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

const ActiveBookingStatus = async (req,res) => {
    try {
        const _GetBookingId = req.params._BookId;
        const _ActiveBookingStatus = await _BookServicerCluster.updateOne({_id:_GetBookingId},{$set:{BookingStatus:1}});
        res.json({
            Message:'Found Succseefull',
            Data:true,
            Result:_ActiveBookingStatus
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

const CustomBookServiceByClient = async (req,res) =>{
    try {
        const CustomServiceToAdd = {
            Plan:req.body.Plan,
            PlanPrice:req.body.PlanPrice,
            EventType:req.body.EventTime,
            ClientName:req.body.ClientName, 
            ClientEmail:req.body.ClientEmail, 
            ClientMobile:req.body.ClientMobile,
            NumberOfPersons:req.body.NumberOfPersons, 
            ClientCNINC:req.body.ClientCNINC, 
            EventDate:req.body.EventDate, 
            EventTime:req.body.EventTime, 
            PaymentMethod:req.body.PaymentMethod,
            EventLocation:req.body.EventLocation 
        }
        const _SavedData = await _CustomBookServicerCluster.create(CustomServiceToAdd);
        res.json({
            Message:'Saved Successfully',
            Data:true,
            Result:_SavedData
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
} 

// Update Block Code
module.exports = { AddService, GetAllServices, DeleteById, GetServiceById, UpdateServiceById, BookServiceByClient, GetAllBookingData, GetAllBookingDataById, ActiveBookingStatus, CustomBookServiceByClient } 