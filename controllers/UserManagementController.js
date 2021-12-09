const _UserCluster = require('../models/UserManagementModel');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRegister = async (req, res) => {
    try {
        const _RegisterUserToSave = new _UserCluster({
            Name: req.body.Name,
            // LName: req.body.LName,
            // SFN: req.body.sfn,
            // SLN: req.body.sln,
            Email: req.body.Email,
            Mobile: req.body.Mobile,
            Password: req.body.Password,
            // Department: req.body.Department,
            Address: req.body.Address,
            Category: req.body.Category,
            // ImageUrl: req.file.filename,
            // ImageName: req.file.originalname,
            // ImageMimeType: req.file.mimetype,
        });
        await _RegisterUserToSave.save();
        res.json({ Message: 'User Register Successfully', Result: true, Data: true});

    } catch (error) {
        // fs.unlinkSync(`./assets/Users/${req.file.filename}`);
        res.json({ Message: error.message, Result: null, Data: false });
    }
}

const UserLogin = async (req, res) => {
    try {
        _Email = req.body.Email;
        _Password = req.body.Password;
        const _UserToAuthenticate = await _UserCluster.findOne({ Email: _Email });

        if (_UserToAuthenticate === null) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or UserName',
                Data: false,
                Result: null
            })
        }

        const _Result = await bcrypt.compare(_Password, _UserToAuthenticate.Password);
        if (!_Result) {
            return res.json({
                Message: 'Authentication Failed Either Incorrect Password or UserName',
                Data: false,
                Result: null
            })
        }

        const _Token = jwt.sign(
            {
                Email: _UserToAuthenticate.Email,
                UserId: _UserToAuthenticate._id
            },
            'UserLogin',
            { expiresIn: '1h' }
        )

        if (_UserToAuthenticate.Status === 0) {
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
            Result: _UserToAuthenticate
        })


    } catch (error) {
        console.log(error.message);
        res.json({
            Error: error.message,
            Data: null
        })
    }
}

const GetALlUsersOrStudents = async (req,res) => {
    try {
        const _GetALlUsersOrStudents = await _UserCluster.find();
        res.json({
            Message:'Found Successfully',
            Data:true,
            Result:_GetALlUsersOrStudents
        })   
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

module.exports = { UserLogin, UserRegister, GetALlUsersOrStudents };

