const express = require('express');
const { response } = require('express');
const router = require('../routes/routes');

const getData = (req, res) => {
        fetch('http://numbersapi.com/1/30/date?json')
        .then(
            response => response.json()
        )
        .then (data => {
            res.json(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        });
    }
    
//const upload = multer({ storage: storage }).single('image');

const uploadImage = (req, res) => {
    // res.json({
    //     "msg": "image uploaded"
    // });
    upload(req, res, (error) => {
        if(error){
            return res.status(400).json({eror: error.message})
        }
        res.status(200).json({msg: "Image uploaded successfully"})
    })
}

module.exports = {
    getData, 
    uploadImage
};
