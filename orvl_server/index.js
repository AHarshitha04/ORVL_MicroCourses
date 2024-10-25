const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');


const app = express();
const port = 8000;

// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials:true,
    
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


 const MicroCourses = require('./src/microcourse/microcourse');
app.use('/MicroCourses', MicroCourses);


//start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
 