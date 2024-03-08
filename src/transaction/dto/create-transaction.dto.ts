import {
    IsNotEmpty,
} from 'class-validator';
export class CreateTransactionDto {
    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    id_category: string;

    @IsNotEmpty()
    date: string;

    @IsNotEmpty()
    id_account: string;

    @IsNotEmpty()
    comment: string;
}