"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_json_1 = require("./data.json");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/', async (req, res) => {
    res.send('ok');
});
app.get('/blogs', async (req, res) => {
    res.json({
        blogs: data_json_1.data,
    });
});
// app.get('/blog/:id', async (req, res) => {
//   const id = req.params.id;
//   const blog = blogs.find((item: Item) => item.id === Number(id));
//   if (!blog) throw new Error('No blog post requested');
//   res.json({
//     blog,
//   });
// });
// app.post('/blog', async (req, res) => {
//   if (!req.body) throw new Error('No blog post requested');
//   const { id, title, price, body } = req.body;
//   blogs.push({ id, title, price, body });
//   res.json({
//     success: true,
//   });
// });
app.listen(8000, () => {
    console.log('🚀 Server started 🚀');
});
// more routes to implement here
//# sourceMappingURL=index.js.map