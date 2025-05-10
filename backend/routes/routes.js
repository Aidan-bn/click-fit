const express = require('express');
const router = express.Router();
const {getData, uploadImage} = require ( '../controller/appController');

router.get('/', getData);
router.post('/image', uploadImage);

module.exports = router;
