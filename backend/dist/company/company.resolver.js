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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const company_service_1 = require("./company.service");
const create_company_dto_1 = require("./dto/create-company.dto");
const input_company_input_1 = require("./input-company.input");
let CompanyResolver = class CompanyResolver {
    constructor(CompanyService) {
        this.CompanyService = CompanyService;
    }
    async Company() {
        return this.CompanyService.findAll();
    }
    async createCompany(input) {
        return this.CompanyService.create(input);
    }
    async deleteCompany(id) {
        return this.CompanyService.delete(id);
    }
    async hello() {
        return 'hello';
    }
};
__decorate([
    graphql_1.Query(() => [create_company_dto_1.CompanyType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "Company", null);
__decorate([
    graphql_1.Mutation(() => create_company_dto_1.CompanyType),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_company_input_1.CompanyInput]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "createCompany", null);
__decorate([
    graphql_1.Mutation(() => create_company_dto_1.CompanyType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "deleteCompany", null);
__decorate([
    graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "hello", null);
CompanyResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyResolver);
exports.CompanyResolver = CompanyResolver;
//# sourceMappingURL=company.resolver.js.map