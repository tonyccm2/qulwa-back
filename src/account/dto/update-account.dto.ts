import { IsNotEmpty } from 'class-validator';
export class UpdateAccountDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    icon: string;

    @IsNotEmpty()
    color: string;

    @IsNotEmpty()
    currency: string;
}