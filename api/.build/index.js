"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const data_json_1 = require("./data.json");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/', async (req, res) => {
    res.send('ok');
});
app.get('/emissions', async (req, res) => {
    res.json({
        emssions: data_json_1.data,
    });
});
app.listen(8000, () => {
    console.log('🚀 Server started 🚀');
});
// more routes to implement here
//# sourceMappingURL=index.js.map