import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

import { ItemService } from '../../services/item.service';
import { OrderService } from '../../services/order.service';
import { Product } from '../../entities/product.entity';
import {Item} from '../../entities/item.entity'; 
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  public items:Item[]=[];
  public total:number=0;
  public remove(id:string):void{};
  public loadCart():void{};


  constructor(
      public activatedRoute: ActivatedRoute,
      private router: Router,
      public productService:ProductService,
      public itemService: ItemService,
      private order_service: OrderService
  ) { }

    ngOnInit() {

    // this.items=this.itemService.items;
    // this.total=this.itemService.total;
    this.remove=this.itemService.remove;
    this.loadCart=this.itemService.loadCart;

    this.activatedRoute.params.subscribe(async params=>{
      var id=params['id'];
      if(id) {
        var item:Item={
          product:await this.productService.find(id),
          quantity:1
        };
        if(localStorage.getItem('cart')==null){
          let cart:any=[];
          cart.push(JSON.stringify(item));
          await localStorage.setItem('cart',JSON.stringify(cart))
        }
        else
        {
          let cart:any=JSON.parse(await localStorage.getItem('cart'));
          let index:number=-1;
          for(var i=0;i<cart.length;i++){
            let item:Item=JSON.parse(cart[i]);
            if (item.product.id==id) {
              index=i;
              break;
            }
          }
        if(index==-1){
          cart.push(JSON.stringify(item));
          await localStorage.setItem('cart',JSON.stringify(cart));
        }
         else 
         {
          let item:Item=JSON.parse(cart[index]);
          item.quantity +=1;
          cart[index]=JSON.stringify(item);
          await localStorage.setItem("cart",JSON.stringify(cart));
         }
        
        }
        this.loadCart();

      }else {
        this.loadCart();
      }
    } );

  }

    onOrderCheckout() {
        if (this.order_service.loginRequired) {
            //Force Login
            this.router.navigate(["login"])
        } else {
            //Go to checkout
            this.router.navigate(["checkout"])
        }
    }

}

