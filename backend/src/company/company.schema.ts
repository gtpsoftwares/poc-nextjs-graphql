import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
    companyname: String,
    personname: String,
    phone: Number,
    address: String,
    industry: String,
    location: String,
});