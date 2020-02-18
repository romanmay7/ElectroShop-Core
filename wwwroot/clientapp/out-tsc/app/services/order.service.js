import * as tslib_1 from "tslib";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Order } from '../entities/order.entity';
let OrderService = class OrderService {
    constructor(http, itemService) {
        this.http = http;
        this.itemService = itemService;
        this.token = "";
    }
    prepareNewOrder() {
        this.order = new Order();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        this.order.orderNumber = "ORD-" + mm + '-' + dd + '-' + yyyy;
        this.order.orderDate = mm + '-' + dd + '-' + yyyy;
        this.order.items = this.itemService.items;
    }
    checkout() {
        this.prepareNewOrder();
        return this.http.post("api/Orders", this.order, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
                .set('Content-Type', 'application/json; charset=utf-8')
        })
            .pipe(map(response => {
            alert("Your Order was Submited,Thank you!");
            this.order = new Order(); //Reset Order
            this.itemService.items = []; //Reset Shopping Cart
            localStorage.removeItem('cart'); //Reset Local storage
            return true;
        }));
    }
    get loginRequired() {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }
    login(creds) {
        return this.http
            .post("/Account/CreateToken", creds)
            .pipe(map((data) => {
            this.token = data.token;
            this.tokenExpiration = data.expiration;
            //this.currentUser = creds.username;
            return true;
        }));
    }
    resetToken() {
        this.token = "";
    }
};
OrderService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map