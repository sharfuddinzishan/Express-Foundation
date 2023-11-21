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
app.get('/', (req, res) => {
    res.send('Hello World Zishan!');
});
app.post('/:id/:semester', (req, res) => {
    let { id, semester } = req.params || {};
    res.send(`Got Param Data ${id},${semester}`);
    console.log(req.params);
});
app.post('/', (req, res) => {
    let { id, semester } = req.query || {};
    res.send(`Got Query Data ${id},${semester}`);
    console.log(req.query);
});
app.post('/poem', (req, res) => {
    console.log(req.body);
    res.send('Poem Send!');
});
app.post('/getData', (req, res) => {
    console.log(req.body);
    res.send('got Data');
});
exports.default = app;
