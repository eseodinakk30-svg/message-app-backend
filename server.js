const express = require('express');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

app.use(bodyParser.json());

// User routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

// WebSocket connection
wss.on('connection', (ws) => {
    console.log('New client connected');
    // Chat message handling
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Handle chat message
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
