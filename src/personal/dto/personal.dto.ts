import { IsEmail, IsNumberString, IsString } from 'class-validator';

export class PersonalDto {
  @IsNumberString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsString()
  sexo: string;
  @IsNumberString()
  phone: string;
  @IsEmail()
  email: string;
  @IsString()
  image: string;
}
