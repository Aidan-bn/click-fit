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

module.exports = getData;