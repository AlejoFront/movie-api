"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const path_1 = __importDefault(require("path"));
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite',
    logging: false,
    models: [path_1.default.join(__dirname, 'models')]
});
exports.default = sequelize;
