"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cidade_controller_1 = require("../controller/cidade.controller");
class CidadeRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.get('/', cidade_controller_1.default.find);
        this.router.post('/', cidade_controller_1.default.create);
        this.router.get('/:id([0-9]+)', cidade_controller_1.default.findById);
        this.router.put('/:id([0-9]+)', cidade_controller_1.default.update);
        this.router.delete('/:id([0-9]+)', cidade_controller_1.default.delete);
    }
}
exports.default = new CidadeRouter().router;
//# sourceMappingURL=cidade.router.js.map