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
const typeorm_1 = require("typeorm");
const genero_entity_1 = require("./genero.entity");
let FilmeEntity = class FilmeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FilmeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: false }),
    __metadata("design:type", String)
], FilmeEntity.prototype, "nome", void 0);
__decorate([
    typeorm_1.ManyToOne(type => genero_entity_1.GeneroEntity, { eager: true, nullable: false }),
    typeorm_1.JoinColumn({ name: 'genero_id' }),
    __metadata("design:type", genero_entity_1.GeneroEntity)
], FilmeEntity.prototype, "genero", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], FilmeEntity.prototype, "ano", void 0);
__decorate([
    typeorm_1.Column({ length: 100, nullable: true }),
    __metadata("design:type", String)
], FilmeEntity.prototype, "sinopse", void 0);
FilmeEntity = __decorate([
    typeorm_1.Entity({ name: 'filme' })
], FilmeEntity);
exports.FilmeEntity = FilmeEntity;
//# sourceMappingURL=filme.entity.js.map