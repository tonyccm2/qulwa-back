import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Account } from "src/account/schemas/account.schema";

@Schema()
export class Transaction {
    @Prop({ required: true })
    amount: number;

    @Prop({ required: true })
    id_category: string;

    @Prop({ required: true })
    date: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Account' })
    id_account: Account;

    @Prop({ required: true })
    comment: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);