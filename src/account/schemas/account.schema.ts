import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { User } from "src/user/schemas/user.schema";

@Schema()
export class Account {

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' })
    user: string | User;
    
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    icon: string;

    @Prop({ required: true })
    color: string;

    @Prop({ required: true })
    balance: number;

    @Prop({ required: true })
    currency: string;

}

export const AccountSchema = SchemaFactory.createForClass(Account);