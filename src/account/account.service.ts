import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './schemas/account.schema';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>
  ) { }

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const account = await this.accountModel.create(createAccountDto);
    return account;
  }

  async findAll(): Promise<Account[]> {
    const accounts = await this.accountModel.find();
    return accounts;
  }

  async findOne(id: string): Promise<Account> {
    const account = await this.accountModel.findById(id);
    return account;
  }

  async update(id: string, updateAccountDto: UpdateAccountDto): Promise<Account> {
    const account = await this.accountModel.findByIdAndUpdate(
      id,
      updateAccountDto,
      { new: true },
    );
    return account;
  }

  async remove(id: string): Promise<Account> {
    const account = await this.accountModel.findByIdAndDelete(id);
    return account;
  }
}
