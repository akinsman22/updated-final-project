"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const models_1 = require("./models");
const pitchRoutes_1 = __importDefault(require("./routes/pitchRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// incoming requests
const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:3003']
};
app.use(cors(corsOptions));
// Routes
app.use('/api/pitches', pitchRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use((req, res, next) => {
    res.status(404).end();
});
// Syncing our database
models_1.db.sync({ alter: true }).then(() => {
    console.info("connected to the database!");
});
app.listen(3000);
