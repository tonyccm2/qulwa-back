import { Controller, Get, Post, Body, Patch, Param, Delete, Res, NotFoundException, HttpStatus } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post()
  async create(@Res() res, @Body() createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryService.create(createCategoryDto);
    if (!category) throw new NotFoundException('Category not created');
    return res.status(HttpStatus.OK).json({
      message: 'Category created successfully',
      category,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const categorys = await this.categoryService.findAll();
    return res.status(HttpStatus.OK).json({
      message: 'List of categorys',
      categorys,
    });
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const category = await this.categoryService.findOne(id);
    if (!category) throw new NotFoundException('Category not found');
    return res.status(HttpStatus.OK).json({
      message: 'Category by id',
      category,
    });
  }

  @Patch(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const category = await this.categoryService.update(id, updateCategoryDto);
    if (!category) throw new NotFoundException('Category not found');
    return res.status(HttpStatus.OK).json({
      message: 'Category updated successfully',
      category,
    });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const category = await this.categoryService.remove(id);
    if (!category) throw new NotFoundException('Category not found');
    return res.status(HttpStatus.OK).json({
      message: 'Category deleted successfully',
      category,
    });
  }
}
