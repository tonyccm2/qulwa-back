import { PartialType } from '@nestjs/mapped-types';
import {
    IsNotEmpty,
} from 'class-validator';
export class CreateAccountDto {
    @IsNotEmpty()
    id_user: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    icon: string;

    @IsNotEmpty()
    color: string;

    @IsNotEmpty()
    currency: string;
}

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}