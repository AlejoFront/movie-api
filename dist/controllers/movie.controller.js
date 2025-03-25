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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovie = exports.getMovies = void 0;
const models_1 = require("models");
/**
 * SELECT * FROM Movies (Actor, Genero, Director)
 * @param req
 * @param res
 */
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield models_1.Movies.findAll({ include: [models_1.Actors, models_1.Genders, models_1.Directors] });
    res.json(movies);
});
exports.getMovies = getMovies;
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, year, duration, genderId, directorId, actorIds } = req.body;
    const movie = yield models_1.Movies.create({ title, description, year, duration, genderId, directorId });
    if (actorIds)
        yield movie.$set('actors', actorIds);
    res.status(201).json(movie);
});
exports.createMovie = createMovie;
