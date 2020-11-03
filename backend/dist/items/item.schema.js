"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSchema = void 0;
const mongoose = require("mongoose");
exports.ItemSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
});
//# sourceMappingURL=item.schema.js.map