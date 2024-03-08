import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateAccountDto } from './dto/update-account.dto';

@ApiTags('account')
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Post()
  async create(@Res() res, @Body() createAccountDto: CreateAccountDto) {
    const account = await this.accountService.create(createAccountDto);
    if (!account) throw new NotFoundException('Account not created');
    return res.status(HttpStatus.OK).json({
      message: 'Account created successfully',
      account,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const accounts = await this.accountService.findAll();
    return res.status(HttpStatus.OK).json({
      message: 'List of accounts',
      accounts,
    });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const account = await this.accountService.findOne(id);
    if (!account) throw new NotFoundException('Account not found');
    return res.status(HttpStatus.OK).json({
      message: 'Account by id',
      account,
    });
  }

  @Patch(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    const account = await this.accountService.update(id, updateAccountDto);
    if (!account) throw new NotFoundException('Account not found');
    return res.status(HttpStatus.OK).json({
      message: 'Account updated successfully',
      account,
    });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const account = await this.accountService.remove(id);
    if (!account) throw new NotFoundException('Account not found');
    return res.status(HttpStatus.OK).json({
      message: 'Account deleted successfully',
      account,
    });
  }
}
