export class ItemDto {
  name: string;
  price: number;

  constructor(data) {
    this.name = data.name;
    this.price = data.price;
  }
}
