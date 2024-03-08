import { PartialType } from '@nestjs/mapped-types';
import {
    IsNotEmpty,
} from 'class-validator';
export class CreateCategoryDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    color: string;

    @IsNotEmpty()
    icon: string;

    @IsNotEmpty()
    type: string;
}
