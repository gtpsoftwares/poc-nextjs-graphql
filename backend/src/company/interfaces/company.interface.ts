import { Document } from 'mongoose';

export interface Company extends Document {
    readonly companyname: string;
    readonly personname: string;
    readonly phone: number;
    readonly address: string;
    readonly industry: string;
    readonly location: string;
}