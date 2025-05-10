const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path =require('path');
const  appRouter = require('./routes/routes');

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET'],
    credentials: true,
}));

app.listen(4000, () => {
    console.log('The application is running on port 4000!' )
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage }).single('image');

// app.get ('/', (req, res) => {
// res.json({"message": "am on back end right now"});
// })
app.use('/api/', appRouter);
