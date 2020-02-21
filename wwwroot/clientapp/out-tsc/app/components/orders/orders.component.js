import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as _ from "lodash";
let OrdersComponent = class OrdersComponent {
    constructor(orderService, router, itemService) {
        this.orderService = orderService;
        this.router = router;
        this.itemService = itemService;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.orderService.loginRequired) {
                //Force Login
                this.router.navigate(["login"]);
            }
            this.orders = yield this.orderService.findAll();
        });
    }
    subtotal(order) {
        return _.sum(_.map(order.items, i => i.product.price * i.quantity));
    }
    ;
};
OrdersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-orders',
        templateUrl: './orders.component.html',
        styleUrls: ['./orders.component.scss']
    })
], OrdersComponent);
export { OrdersComponent };
//# sourceMappingURL=orders.component.js.map