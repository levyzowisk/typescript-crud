import { IsNotEmpty } from 'class-validator';

export class  CreateUserDto {
    @IsNotEmpty()   
    question: string

    @IsNotEmpty()
    author: string

}