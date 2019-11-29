"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedido_controller_1 = require("../controller/pedido.controller");
class PedidoRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', pedido_controller_1.default.find);
        this.router.post('/', pedido_controller_1.default.create);
        this.router.get('/:id([0-9]+)', pedido_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', pedido_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', pedido_controller_1.default.delete);
    }
}
exports.default = new PedidoRouter().router;
//# sourceMappingURL=pedido.router.js.map