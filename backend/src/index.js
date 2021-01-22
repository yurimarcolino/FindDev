const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://shenlong:267432abc@cluster0-hwwxe.mongodb.net/teste2?retryWrites=true&w=majority', {

    useUnifiedTopology: true,
    useNewUrlParser: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);