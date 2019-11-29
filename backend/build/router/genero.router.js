"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const genero_controller_1 = require("../controller/genero.controller");
class GeneroRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', genero_controller_1.default.find);
        this.router.post('/', genero_controller_1.default.create);
        this.router.get('/:id([0-9]+)', genero_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', genero_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', genero_controller_1.default.delete);
    }
}
exports.default = new GeneroRouter().router;
//# sourceMappingURL=genero.router.js.map