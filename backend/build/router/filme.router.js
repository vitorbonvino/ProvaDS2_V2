"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filme_controller_1 = require("../controller/filme.controller");
class FilmeRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', filme_controller_1.default.find);
        this.router.post('/', filme_controller_1.default.create);
        this.router.get('/:id([0-9]+)', filme_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', filme_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', filme_controller_1.default.delete);
    }
}
exports.default = new FilmeRouter().router;
//# sourceMappingURL=filme.router.js.map