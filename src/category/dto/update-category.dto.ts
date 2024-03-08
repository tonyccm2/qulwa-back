import { IsNotEmpty } from 'class-validator';
export class UpdateCategoryDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    color: string;

    @IsNotEmpty()
    icon: string;

    @IsNotEmpty()
    type: string;
}