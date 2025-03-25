"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("models");
let Movies = (() => {
    let _classDecorators = [sequelize_typescript_1.Table];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _year_decorators;
    let _year_initializers = [];
    let _year_extraInitializers = [];
    let _duration_decorators;
    let _duration_initializers = [];
    let _duration_extraInitializers = [];
    let _directorId_decorators;
    let _directorId_initializers = [];
    let _directorId_extraInitializers = [];
    let _gender_decorators;
    let _gender_initializers = [];
    let _gender_extraInitializers = [];
    let _director_decorators;
    let _director_initializers = [];
    let _director_extraInitializers = [];
    let _actors_decorators;
    let _actors_initializers = [];
    let _actors_extraInitializers = [];
    var Movies = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.description = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.year = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _year_initializers, void 0));
            this.duration = (__runInitializers(this, _year_extraInitializers), __runInitializers(this, _duration_initializers, void 0));
            this.directorId = (__runInitializers(this, _duration_extraInitializers), __runInitializers(this, _directorId_initializers, void 0));
            this.gender = (__runInitializers(this, _directorId_extraInitializers), __runInitializers(this, _gender_initializers, void 0));
            this.director = (__runInitializers(this, _gender_extraInitializers), __runInitializers(this, _director_initializers, void 0));
            this.actors = (__runInitializers(this, _director_extraInitializers), __runInitializers(this, _actors_initializers, void 0));
            __runInitializers(this, _actors_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Movies");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _title_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })];
        _description_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT })];
        _year_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })];
        _duration_decorators = [(0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })];
        _directorId_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => models_1.Directors), (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)];
        _gender_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => models_1.Genders)];
        _director_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => models_1.Directors)];
        _actors_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => models_1.Actors)];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _year_decorators, { kind: "field", name: "year", static: false, private: false, access: { has: obj => "year" in obj, get: obj => obj.year, set: (obj, value) => { obj.year = value; } }, metadata: _metadata }, _year_initializers, _year_extraInitializers);
        __esDecorate(null, null, _duration_decorators, { kind: "field", name: "duration", static: false, private: false, access: { has: obj => "duration" in obj, get: obj => obj.duration, set: (obj, value) => { obj.duration = value; } }, metadata: _metadata }, _duration_initializers, _duration_extraInitializers);
        __esDecorate(null, null, _directorId_decorators, { kind: "field", name: "directorId", static: false, private: false, access: { has: obj => "directorId" in obj, get: obj => obj.directorId, set: (obj, value) => { obj.directorId = value; } }, metadata: _metadata }, _directorId_initializers, _directorId_extraInitializers);
        __esDecorate(null, null, _gender_decorators, { kind: "field", name: "gender", static: false, private: false, access: { has: obj => "gender" in obj, get: obj => obj.gender, set: (obj, value) => { obj.gender = value; } }, metadata: _metadata }, _gender_initializers, _gender_extraInitializers);
        __esDecorate(null, null, _director_decorators, { kind: "field", name: "director", static: false, private: false, access: { has: obj => "director" in obj, get: obj => obj.director, set: (obj, value) => { obj.director = value; } }, metadata: _metadata }, _director_initializers, _director_extraInitializers);
        __esDecorate(null, null, _actors_decorators, { kind: "field", name: "actors", static: false, private: false, access: { has: obj => "actors" in obj, get: obj => obj.actors, set: (obj, value) => { obj.actors = value; } }, metadata: _metadata }, _actors_initializers, _actors_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Movies = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Movies = _classThis;
})();
exports.default = Movies;
