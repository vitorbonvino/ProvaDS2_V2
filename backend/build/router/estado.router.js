"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estado_controller_1 = require("../controller/estado.controller");
class EstadoRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', estado_controller_1.default.find);
        this.router.post('/', estado_controller_1.default.create);
        this.router.get('/:id([0-9]+)', estado_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', estado_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', estado_controller_1.default.delete);
    }
}
exports.default = new EstadoRouter().router;
//# sourceMappingURL=estado.router.js.map