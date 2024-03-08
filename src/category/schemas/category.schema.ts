import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Category {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    color: string;

    @Prop({ required: true })
    icon: string;

    @Prop({ required: true })
    type: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);