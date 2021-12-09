const _AdminManagementRegisterModel = require('../models/AdminManagementRegisterModel');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const AdminLogin = async (req, res) => {
    console.log(req.body);
    try {
        _Email = req.body.Email;
        _Password = req.body.Password;
        const _AdminToAuthenticate = await _AdminManagementRegisterModel.findOne({ Email: _Email });
       
        console.log(_AdminToAuthenticate);
        if (_AdminToAuthenticate === null) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or UserName',
                Data: false,
                Result:null
            })
        }
        
        const _Result = await bcrypt.compare(_Password, _AdminToAuthenticate.Password);
        console.log(_Result);
        if (!_Result) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or UserName',
                Data: false,
                Result: null
            })
        }
        
        const _Token = jwt.sign(
            {
                Email: _AdminToAuthenticate.Email,
                UserId: _AdminToAuthenticate._id
            },
            'UserLogin',
            { expiresIn: '1h' }
        )
        
        if (_AdminToAuthenticate.Status === 0) {
            return res.json({
                Message: 'You cannot login as you are suspended by Admin',
                Data: false,
                Result: null
            })
        }
        
        
        return res.json({
            Message: 'Authentication SuccessFull',
            Data: true,
            Token: _Token,
            Result: _AdminToAuthenticate
        })

    } catch (error) {
        res.status(500).json({
            Error: error.message,
            Data: false,
            Result: null
        })
    }
}

module.exports = {AdminLogin};