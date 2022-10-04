import { Injectable } from '@nestjs/common';
import { bd } from './bd';
import { ItemDto } from './item.dto';

@Injectable()
export class ItemService {
  getItems() {
    return bd.map((x: any) => new ItemDto(x));
  }

  postItem(item: { name: string; price: number }) {
    const id = bd[bd.length - 1].id + 1;
    const newItem = { name: item.name, price: item.price, id: id };
    bd.push(newItem);
    return bd.map((x: any) => new ItemDto(x));
  }

  deleteItem(id: number) {
    const newbd = bd.filter((x: any) => x.id === id);
    return newbd.map((x: any) => new ItemDto(x));
  }
}
