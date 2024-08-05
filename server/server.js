const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log('Connected to database'));

// CORS middleware
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type'], 
}));

// Log all requests
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
});

// Body parser middleware
app.use(bodyParser.json());

// Test route to check CORS headers
app.get('/test', (req, res) => {
    res.json({ message: 'CORS is working!' });
});

// Application routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
