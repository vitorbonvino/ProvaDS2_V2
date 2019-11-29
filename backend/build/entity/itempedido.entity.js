"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_entity_1 = require("./produto.entity");
const typeorm_1 = require("typeorm");
const pedido_entity_1 = require("./pedido.entity");
let ItemPedidoEntity = class ItemPedidoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ItemPedidoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => pedido_entity_1.PedidoEntity, { nullable: false }),
    typeorm_1.JoinColumn({ name: 'pedido_id' }),
    __metadata("design:type", pedido_entity_1.PedidoEntity)
], ItemPedidoEntity.prototype, "pedido", void 0);
__decorate([
    typeorm_1.ManyToOne(type => produto_entity_1.ProdutoEntity, { eager: true, nullable: false }),
    typeorm_1.JoinColumn({ name: 'produto_id' }),
    __metadata("design:type", produto_entity_1.ProdutoEntity)
], ItemPedidoEntity.prototype, "produto", void 0);
__decorate([
    typeorm_1.Column({ type: 'double', nullable: false }),
    __metadata("design:type", Number)
], ItemPedidoEntity.prototype, "qtdade", void 0);
__decorate([
    typeorm_1.Column({ type: 'double', nullable: false }),
    __metadata("design:type", Number)
], ItemPedidoEntity.prototype, "vlrunit", void 0);
ItemPedidoEntity = __decorate([
    typeorm_1.Entity({ name: 'itempedido' })
], ItemPedidoEntity);
exports.ItemPedidoEntity = ItemPedidoEntity;
//# sourceMappingURL=itempedido.entity.js.map