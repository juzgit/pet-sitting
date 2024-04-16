const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 8090;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    w: 'majority',
}).then( () => {
    console.log('Connected to MongoDB database.');

}).catch((error) => {
    console.error(`MongoDB connection error: ${error}`)
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});