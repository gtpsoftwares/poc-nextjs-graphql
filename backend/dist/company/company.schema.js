"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySchema = void 0;
const mongoose = require("mongoose");
exports.CompanySchema = new mongoose.Schema({
    companyname: String,
    personname: String,
    phone: Number,
    address: String,
    industry: String,
    location: String,
});
//# sourceMappingURL=company.schema.js.map