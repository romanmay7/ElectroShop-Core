import { Item } from './item.entity';

export class Order {
    id: string;
    orderDate: string;
    orderNumber: string;
    items: Item[];

}
