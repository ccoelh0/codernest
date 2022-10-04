import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('api/items')
export class ItemsController {
  private readonly itemService: ItemService;
  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  @Get()
  getItems() {
    return this.itemService.getItems();
  }

  @Post()
  postItem(@Body() item: { name: string; price: number }) {
    return this.itemService.postItem(item);
  }

  @Delete()
  deleteItem(@Body() id: number) {
    return this.itemService.deleteItem(id);
  }
}
