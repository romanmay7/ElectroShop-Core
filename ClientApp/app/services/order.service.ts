import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { ItemService } from './item.service';
import { Order } from '../entities/order.entity';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient, private itemService: ItemService) { }

    public new_order: Order;
    private token: string = "";
    private tokenExpiration: Date;
    private ordersList:Order[];



    public prepareNewOrder()
    {
        this.new_order = new Order();

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        this.new_order.orderNumber = "ORD-" + mm + '-' + dd + '-' + yyyy;
        this.new_order.orderDate =  mm + '-' + dd + '-' + yyyy;
        this.new_order.items = this.itemService.items;

    }
    
    async loadOrders()
    {
        this.ordersList = await this.http.get<Order[]>("/api/orders",
            {
                headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
                    .set('Content-Type', 'application/json; charset=utf-8')
            }).toPromise();

    }

    async findAll(): Promise<Order[]> {
        await this.loadOrders();
        return this.ordersList;
    }


    public checkout() {

        this.prepareNewOrder();

        return this.http.post("api/Orders", this.new_order, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
                .set('Content-Type', 'application/json; charset=utf-8')
        })
            .pipe(
                map(response => {
                    alert("Your Order was Submited,Thank you!");
                    this.new_order = new Order();//Reset Order
                    this.itemService.items = [] //Reset Shopping Cart
                    localStorage.removeItem('cart') //Reset Local storage
                    return true;
                })

            );
    }


    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    login(creds): Observable<boolean> {
        return this.http
            .post("/Account/CreateToken", creds)
            .pipe(
                map((data: any) => {
                    this.token = data.token;
                    this.tokenExpiration = data.expiration;
                    //this.currentUser = creds.username;
                    return true;
                })

            );
    }

    resetToken() {
        this.token = "";
    }
}
