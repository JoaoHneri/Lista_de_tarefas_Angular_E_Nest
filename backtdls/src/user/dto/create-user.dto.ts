import { User } from '../entities/user.entity';
import {
  IsEmail,
  Matches,
  MaxLength,
  MinLength,
  IsString,
} from 'class-validator';
export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Senha muito fraca, sua senha deve conter pelo menos um dígito, ou conter pelo menos um caractere não alfanumérico, Não conter pontos (.) ou quebras de linha, deve conter pelo menos uma letra maiúscula e uma letra minúscula',
  })
  password: string;

  @IsString()
  name: string;
}
