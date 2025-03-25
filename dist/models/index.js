"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncDatabase = exports.Directors = exports.Genders = exports.Actors = exports.Movies = exports.sequelize = void 0;
const database_1 = __importDefault(require("../config/database"));
exports.sequelize = database_1.default;
const Movies_1 = __importDefault(require("./Movies"));
exports.Movies = Movies_1.default;
const Actors_1 = __importDefault(require("./Actors"));
exports.Actors = Actors_1.default;
const Genders_1 = __importDefault(require("./Genders"));
exports.Genders = Genders_1.default;
const Directors_1 = __importDefault(require("./Directors"));
exports.Directors = Directors_1.default;
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.sync({ force: false });
    console.log('Database synced!');
});
exports.syncDatabase = syncDatabase;
