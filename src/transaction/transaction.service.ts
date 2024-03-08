import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './entities/transaction.entity';
import { Model } from 'mongoose';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>
  ) { }

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const transaction = await this.transactionModel.create(createTransactionDto)
    return transaction;
  }

  async findAll(): Promise<Transaction[]> {
    const transactions = await this.transactionModel.find()
    return transactions;
  }

  async findOne(id_transaction: string): Promise<Transaction> {
    const Transaction = await this.transactionModel.findById(id_transaction)
    return Transaction;
  }

  async update(id_transaction: string, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.transactionModel.findByIdAndUpdate(
      id_transaction,
      updateTransactionDto,
      { new: true },
    );
    return transaction;
  }

  async remove(id_transaction: string): Promise<Transaction> {
    const transaction = await this.transactionModel.findByIdAndDelete(id_transaction)
    return transaction;
  }
}
