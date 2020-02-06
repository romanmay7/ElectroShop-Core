import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as _ from "lodash";
let ItemService = class ItemService {
    constructor(productService) {
        this.productService = productService;
        this.loggedIn = false;
        this.items = [];
        this.total = 0;
    }
    loadCart() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.total = 0;
            this.items = [];
            let cart = yield JSON.parse(localStorage.getItem('cart'));
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                this.items.push({
                    product: item.product,
                    quantity: item.quantity
                });
                this.total += item.product.price * item.quantity;
            }
        });
    }
    add(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var item = {
                product: yield this.productService.find(id),
                quantity: 1
            };
            if ((yield localStorage.getItem('cart')) == null) {
                let cart = [];
                cart.push(JSON.stringify(item));
                yield localStorage.setItem('cart', JSON.stringify(cart));
            }
            else {
                let cart = JSON.parse(yield localStorage.getItem('cart'));
                let index = -1;
                for (var i = 0; i < cart.length; i++) {
                    let item = JSON.parse(cart[i]);
                    if (item.product.id == id) {
                        index = i;
                        break;
                    }
                }
                if (index == -1) {
                    cart.push(JSON.stringify(item));
                    yield localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    let item = JSON.parse(cart[index]);
                    item.quantity += 1;
                    cart[index] = JSON.stringify(item);
                    yield localStorage.setItem("cart", JSON.stringify(cart));
                }
            }
            this.loadCart();
        });
    }
    remove(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let cart = yield JSON.parse(localStorage.getItem('cart'));
            //let index:number=-1;
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                if (item.product.id == id) {
                    cart.splice(i, 1);
                    break;
                }
            }
            yield localStorage.setItem("cart", JSON.stringify(cart));
            yield this.loadCart();
        });
    }
    subtotal() {
        return _.sum(_.map(this.items, i => i.product.price * i.quantity));
    }
    ;
};
ItemService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ItemService);
export { ItemService };
//# sourceMappingURL=item.service.js.map