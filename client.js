const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

require('dotenv').config();

const clientApp = express();
const server = http.createServer(clientApp);

const port = process.env.PORT || 3000;

clientApp.use(cors());
clientApp.use(express.json());

if (process.env.LIVE_STATUS) {
    clientApp.use(express.static(path.join(__dirname, './build')));

    clientApp.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './build', './index.html'));
    })
}

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
