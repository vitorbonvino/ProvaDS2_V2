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
const estado_entity_1 = require("./estado.entity");
const typeorm_1 = require("typeorm");
let CidadeEntity = class CidadeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CidadeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: false }),
    __metadata("design:type", String)
], CidadeEntity.prototype, "nome", void 0);
__decorate([
    typeorm_1.ManyToOne(type => estado_entity_1.EstadoEntity, { eager: true, nullable: false }),
    typeorm_1.JoinColumn({ name: 'estado_id' }),
    __metadata("design:type", estado_entity_1.EstadoEntity)
], CidadeEntity.prototype, "estado", void 0);
__decorate([
    typeorm_1.Column({ type: 'double', nullable: false }),
    __metadata("design:type", Number)
], CidadeEntity.prototype, "lat", void 0);
__decorate([
    typeorm_1.Column({ type: 'double', nullable: false }),
    __metadata("design:type", Number)
], CidadeEntity.prototype, "lng", void 0);
CidadeEntity = __decorate([
    typeorm_1.Entity({ name: 'cidade' })
], CidadeEntity);
exports.CidadeEntity = CidadeEntity;
//# sourceMappingURL=cidade.entity.js.map