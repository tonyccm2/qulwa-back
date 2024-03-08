import { PartialType } from '@nestjs/swagger';
import { CreateTransactionDto } from './create-transaction.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateTransactionDto {
    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    id_category: string;

    @IsNotEmpty()
    date: string;

    @IsNotEmpty()
    comment: string;
}
