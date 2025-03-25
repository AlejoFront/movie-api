"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const actor_controller_1 = require("controllers/actor.controller");
const router = express_1.default.Router();
router.get('/', actor_controller_1.getActors);
router.post('/', actor_controller_1.createActor);
exports.default = router;
