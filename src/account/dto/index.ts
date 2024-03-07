import { PartialType } from '@nestjs/mapped-types';
import {
    IsNotEmpty,
} from 'class-validator';
export class CreateAccountDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;
}

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}