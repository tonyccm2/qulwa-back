import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create(createUserDto)
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find()
    return users;
  }

  async findOne(id_user: string): Promise<User> {
    const user = await this.userModel.findById(id_user)
    return user;
  }

  async update(id_user: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByIdAndUpdate(
      id_user,
      updateUserDto,
      { new: true },
    );
    return user;
  }

  async remove(id_user: string): Promise<User> {
    const user = await this.userModel.findByIdAndDelete(id_user)
    return user;
  }
}
