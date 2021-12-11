const _AdminManagementRegisterModel = require('../models/AdminManagementRegisterModel');
const _UserCluster = require('../models/UserManagementModel');
const fs = require('fs');

const AdminRegister= async(req,res)=>{
    console.log(req.body);
    try {
        const _GetAdminUserLength = await _AdminManagementRegisterModel.find();
        if (_GetAdminUserLength.length >= 1) {
            return res.json({
                Message:`Admin Regesteration is Constraint`,
                Result:null,
                Data:false
            })
        }
        if(_GetAdminUserLength.length <=0 ){
            const _RegisterAdmin = new _AdminManagementRegisterModel({
                Name: req.body.Name,
                Email: req.body.Email,
                Mobile: req.body.Mobile,
                Password: req.body.Password,
            });
            await _RegisterAdmin.save();
            return res.json({
                Message:`Admin Register Successfully`,
                Result:1,
                Data:true
            })

        }
    } catch (error) {;
        res.json({ Message: error.message, Result: null, Data:false });
    }
}

const GetAllAvailServicesUsers = async (req,res) =>{
    try {
        const _GetAllAvailServicesUsers = await _UserCluster.find({Category:'Avail Service'});
        res.json({
            Message:'Found Successfully',
            Data:true,
            Result:_GetAllAvailServicesUsers
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

const GetAllServiceProviderUsers = async (req,res) =>{
    try {
        const _GetAllServiceProviderUsers = await _UserCluster.find({Category:'Service Provider'});
        res.json({
            Message:'Found Successfully',
            Data:true,
            Result:_GetAllServiceProviderUsers
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}


module.exports = { AdminRegister, GetAllAvailServicesUsers ,GetAllServiceProviderUsers };

