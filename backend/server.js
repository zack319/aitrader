const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

let Stock = require('./models/stocks.model');

require('dotenv').config();

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (process.env.LIVE_STATUS) {
    app.use(express.static(path.join(__dirname, '../build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../build', './index.html'));
    })
}

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
});

const walletRouter = require('./routes/wallet');
const stocksRouter = require('./routes/stocks');
const userRouter = require('./routes/user');
const portfolioRouter = require('./routes/portfolio');

app.use('/wallet', walletRouter);
app.use('/user', userRouter);
app.use('/stocks', stocksRouter);
app.use('/portfolio', portfolioRouter);

var io = socketIO(server, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
});

const changeStream = Stock.watch();

changeStream.on('change', (change) => {
    console.log(change);
    if (change) {
        if (change.fullDocument) {
            io.emit('changeData', change.fullDocument);
        } else {
            var stockId = change.documentKey._id;
            // get newStock data from DB
            // and emit change as soon as we get new stock data
            Stock.findById(stockId)
            .then(stock => io.emit('changeData', stock))
            .catch(err => res.status(400).json('Error: ' + err));
        }
    }
    if (change) {
        if (change.fullDocument) {
        }
    }
})

io.on('connection', function() {
    console.log('connected');
})

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
