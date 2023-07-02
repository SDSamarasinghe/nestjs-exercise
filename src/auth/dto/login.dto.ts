import {IsEnum, IsNotEmpty, IsNumber, IsString, IsEmail, MinLength} from 'class-validator';


export class LoginDto {


@IsNotEmpty()
@IsEmail({},{message: "Please enter correct email"})
readonly email: string;

@IsNotEmpty()
@IsNumber()
@MinLength(6)
readonly password: string;

}

