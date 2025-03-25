"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gender_controller_1 = require("controllers/gender.controller");
const router = express_1.default.Router();
router.get('/', gender_controller_1.getGenders);
router.post('/', gender_controller_1.createGender);
exports.default = router;
