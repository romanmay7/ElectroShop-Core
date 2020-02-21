import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ItemService } from '../../services/item.service';//for logged username
import { Order } from '../../entities/order.entity';
import { Router } from '@angular/router';
import * as _ from "lodash";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

    public orders: Order[];
    constructor(public orderService: OrderService, private router: Router, public itemService: ItemService) { }

    async ngOnInit() {
        if (this.orderService.loginRequired)
        {
            //Force Login
            this.router.navigate(["login"])
        } 
        this.orders = await this.orderService.findAll();
    }

    subtotal(order: Order): number {
        return _.sum(_.map(order.items, i => i.product.price * i.quantity));
    };

}
