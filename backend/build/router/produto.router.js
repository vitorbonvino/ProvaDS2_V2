"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produto_controller_1 = require("../controller/produto.controller");
class ProdutoRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', produto_controller_1.default.find);
        this.router.post('/', produto_controller_1.default.create);
        this.router.get('/:id([0-9]+)', produto_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', produto_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', produto_controller_1.default.delete);
    }
}
exports.default = new ProdutoRouter().router;
//# sourceMappingURL=produto.router.js.map