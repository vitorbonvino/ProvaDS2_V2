"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendedor_controller_1 = require("../controller/vendedor.controller");
class VendedorRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', vendedor_controller_1.default.find);
        this.router.post('/', vendedor_controller_1.default.create);
        this.router.get('/:id([0-9]+)', vendedor_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', vendedor_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', vendedor_controller_1.default.delete);
    }
}
exports.default = new VendedorRouter().router;
//# sourceMappingURL=vendedor.router.js.map