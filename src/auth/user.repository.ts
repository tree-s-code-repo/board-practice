import { Repository, DataSource } from 'typeorm';
import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import e from 'express';
@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;
    const user = this.create({ username, password });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23305') {
        throw new ConflictException('Existing username');
      }

      console.log(error);
    }
  }
}
