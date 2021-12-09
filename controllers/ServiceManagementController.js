//Accquiring Service Management Model
const _ServiceManagementCluster = require('../models/ServiceManagementModel');

const AddService = async (req, res) => {
    try {
        const _ServiceToAdd = {
            BasicPrice:req.body.BasicPrice,
            BasicDescription:req.body.BasicDescription,
            StandardPrice:req.body.StandardPrice,
            StandardDescription:req.body.StandardDescription,
            PremiumPrice:req.body.PremiumPrice,
            PremiumDescription:req.body.PremiumDescription,
            MainCategory:req.body.MainCategory, 
            Price:req.body.Price,
            CardDescription:req.body.CardDescription, 
            MainDescription:req.body.MainDescription, 
            ImageUrl: `/assets/Service/${req.file.filename}`,
            ImageName: req.file.originalname,
            ImageMimeType: req.file.mimetype,
        }
        const _SavedData = await _ServiceManagementCluster.create(_ServiceToAdd);
        res.json({
            Message: "Service Saved Successfully",
            Data:true,
            Result:_SavedData
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

const GetAllServices = async (req,res) => {
    try {
        const _GetAllServices = await _ServiceManagementCluster.find();
        res.json({
            Message:'All Services Found Successfully',
            Data:true,
            Result:_GetAllServices
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}
module.exports = { AddService, GetAllServices } 