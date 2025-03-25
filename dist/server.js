"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const models_1 = require("./models");
const movie_routes_1 = __importDefault(require("routes/movie.routes"));
const actor_routes_1 = __importDefault(require("routes/actor.routes"));
const gender_routes_1 = __importDefault(require("routes/gender.routes"));
const director_routes_1 = __importDefault(require("routes/director.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/movies', movie_routes_1.default);
app.use('/actors', actor_routes_1.default);
app.use('/genders', gender_routes_1.default);
app.use('/directors', director_routes_1.default);
(0, models_1.syncDatabase)().then(() => {
    app.listen(5000, () => console.log('Server runnning on http://localhost:5000'));
});
