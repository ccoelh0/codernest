import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemService } from './item.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
