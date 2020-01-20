import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CartComponent = class CartComponent {
    constructor(activatedRoute, productService, itemService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.itemService = itemService;
        this.items = [];
        this.total = 0;
    }
    remove(id) { }
    ;
    loadCart() { }
    ;
    ngOnInit() {
        // this.items=this.itemService.items;
        // this.total=this.itemService.total;
        this.remove = this.itemService.remove;
        this.loadCart = this.itemService.loadCart;
        this.activatedRoute.params.subscribe((params) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            var id = params['id'];
            if (id) {
                var item = {
                    product: yield this.productService.find(id),
                    quantity: 1
                };
                if (localStorage.getItem('cart') == null) {
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
            }
            else {
                this.loadCart();
            }
        }));
    }
};
CartComponent = tslib_1.__decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.scss']
    })
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map