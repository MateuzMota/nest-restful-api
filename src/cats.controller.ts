import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
