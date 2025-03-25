"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const director_controller_1 = require("controllers/director.controller");
const router = express_1.default.Router();
router.get('/', director_controller_1.getDirectors);
router.post('/', director_controller_1.createDirector);
exports.default = router;
