"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// Routing
const userRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
const cycleRouter = express_1.default.Router();
app.use('/api/v1/cycles', cycleRouter);
// Middleware
const logger = (req, res, next) => {
    console.log(req.url, req.hostname, req.ip, req.path);
    next();
};
userRouter.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'User Created',
        success: true,
        data: req.body,
    });
});
cycleRouter.get('/show', (req, res) => {
    res.json({
        cycleId: '12k3j4j5',
        price: 12000,
        model: 'Urban',
    });
});
app.get('/', (req, res) => {
    res.send('Hello World Zishan!');
});
app.get('/info', logger, (req, res, next) => {
    try {
        res.send(data);
    }
    catch (error) {
        next(error);
    }
});
app.post('/:id/:semester', logger, (req, res) => {
    let { id, semester } = req.params || {};
    res.send(`Got Param Data ${id},${semester}`);
    console.log(req.params);
});
app.post('/', (req, res) => {
    let { id, semester } = req.query || {};
    res.send(`Got Query Data ${id},${semester}`);
    console.log(req.query);
});
app.post('/poem', logger, (req, res) => {
    console.log(req.body);
    res.send('Poem Send!');
});
app.post('/getData', (req, res) => {
    console.log(req.body);
    res.send('got Data');
});
// Routing handler
const handleRouting = (req, res) => {
    res.status(400).json({
        message: 'Invalid Address',
        successfull: false
    });
};
app.all('**', handleRouting);
// Global Error Handle
let handleError = (error, req, res, next) => {
    console.log(error);
    res.status(400).json({
        message: 'No Response Found',
        successful: false,
        data: error
    });
};
app.use(handleError);
exports.default = app;
