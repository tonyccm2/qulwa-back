import { Controller, Get, Post, Body, Patch, Param, Delete, Res, NotFoundException, HttpStatus } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiTags } from '@nestjs/swagger';
import { AccountService } from 'src/account/account.service';

@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService
  ) { }


  @Post()
  async create(@Res() res, @Body() createTransactionDto: CreateTransactionDto) {
    const transaction = await this.transactionService.create(createTransactionDto);
    if (!transaction) throw new NotFoundException('transaction not created');
    return res.status(HttpStatus.OK).json({
      message: 'Transaction created successfully',
      transaction,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const transactions = await this.transactionService.findAll();
    return res.status(HttpStatus.OK).json({
      message: 'list of transactions',
      transactions,
    });
  }

  @Get(':id_transaction')
  async findOne(@Res() res, @Param('id_transaction') id_transaction: string) {
    const transaction = await this.transactionService.findOne(id_transaction);
    if (!transaction) throw new NotFoundException('transaction not found');
    return res.status(HttpStatus.OK).json({
      message: 'transaction by id',
      transaction,
    });
  }

  @Patch(':id_transaction')
  async update(
    @Res() res,
    @Param('id_transaction') id_transaction: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    const transaction = await this.transactionService.update(id_transaction, updateTransactionDto);
    if (!transaction) throw new NotFoundException('transaction not found');
    return res.status(HttpStatus.OK).json({
      message: 'transaction updated successfully',
      transaction,
    });
  }

  @Delete(':id_transaction')
  async remove(@Res() res, @Param('id_transaction') id_transaction: string) {
    const transaction = await this.transactionService.remove(id_transaction);
    if (!transaction) throw new NotFoundException('transaction not found');
    return res.status(HttpStatus.OK).json({
      message: 'transaction deleted successfully',
      transaction,
    });
  }
}
