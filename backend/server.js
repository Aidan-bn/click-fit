const express = require('express');
const app = express();
const  appRouter = require('./routes/routes');

app.listen(4000, () => {
    console.log('The application is running on port 4000')
});

// app.get ('/', (req, res) => {
// res.json({"message": "am on back end right now"});
// })
app.use('/api/', appRouter);