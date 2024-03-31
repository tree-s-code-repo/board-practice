import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getAll() {
    return this.userRepository.find();
  }

  async signUp(authCredentialDto: AuthCredentialDto) {
    return this.userRepository.createUser(authCredentialDto);
  }
}
