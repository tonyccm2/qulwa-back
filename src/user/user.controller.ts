import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Res() res, @Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    if (!user) throw new NotFoundException('user not created');
    return res.status(HttpStatus.OK).json({
      message: 'User created successfully',
      user,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const users = await this.userService.findAll();
    return res.status(HttpStatus.OK).json({
      message: 'list of users',
      users,
    });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id_user') id_user: string) {
    const user = await this.userService.findOne(id_user);
    if (!user) throw new NotFoundException('user not found');
    return res.status(HttpStatus.OK).json({
      message: 'user by id',
      user,
    });
  }

  @Patch(':id_user')
  async update(
    @Res() res,
    @Param('id_user') id_user: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.userService.update(id_user, updateUserDto);
    if (!user) throw new NotFoundException('user not found');
    return res.status(HttpStatus.OK).json({
      message: 'user updated successfully',
      user,
    });
  }

  @Delete(':id_user')
  async remove(@Res() res, @Param('id_user') id_user: string) {
    const user = await this.userService.remove(id_user);
    if (!user) throw new NotFoundException('user not found');
    return res.status(HttpStatus.OK).json({
      message: 'user deleted successfully',
      user,
    });
  }
}
