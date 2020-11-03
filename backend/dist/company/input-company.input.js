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
exports.CompanyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CompanyInput = class CompanyInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CompanyInput.prototype, "companyname", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CompanyInput.prototype, "personname", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], CompanyInput.prototype, "phone", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CompanyInput.prototype, "address", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CompanyInput.prototype, "industry", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], CompanyInput.prototype, "location", void 0);
CompanyInput = __decorate([
    graphql_1.InputType()
], CompanyInput);
exports.CompanyInput = CompanyInput;
//# sourceMappingURL=input-company.input.js.map