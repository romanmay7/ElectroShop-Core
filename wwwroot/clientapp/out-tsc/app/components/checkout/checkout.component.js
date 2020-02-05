import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as _ from "lodash";
let CheckoutComponent = class CheckoutComponent {
    constructor(activatedRoute, router, productService, itemService, orderService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.itemService = itemService;
        this.orderService = orderService;
        this.errorMessage = "";
    }
    ngOnInit() {
    }
    onCheckout() {
        // TODO
        //alert("Doing checkout");
        this.orderService.checkout().
            subscribe(success => {
            if (success) {
                this.router.navigate(["Shop"]);
            }
        }, err => this.errorMessage = "Failed to Save Order");
    }
    subtotal() {
        return _.sum(_.map(this.itemService.items, i => i.product.price * i.quantity));
    }
    ;
};
CheckoutComponent = tslib_1.__decorate([
    Component({
        selector: 'checkout',
        templateUrl: './checkout.component.html',
        styleUrls: ['./checkout.component.scss']
    })
], CheckoutComponent);
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map