import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
  }

  @Get()
  findAll(): string {
    return 'This action returns call cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
