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
        this.new_order = new Order();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        this.new_order.orderNumber = "ORD-" + mm + '-' + dd + '-' + yyyy;
        this.new_order.orderDate = mm + '-' + dd + '-' + yyyy;
        this.new_order.items = this.itemService.items;
    }
    loadOrders() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.ordersList = yield this.http.get("/api/orders", {
                headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
                    .set('Content-Type', 'application/json; charset=utf-8')
            }).toPromise();
        });
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.loadOrders();
            return this.ordersList;
        });
    }
    checkout() {
        this.prepareNewOrder();
        return this.http.post("api/Orders", this.new_order, {
            headers: new HttpHeaders().set("Authorization", "Bearer " + this.token)
                .set('Content-Type', 'application/json; charset=utf-8')
        })
            .pipe(map(response => {
            alert("Your Order was Submited,Thank you!");
            this.new_order = new Order(); //Reset Order
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