import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProductComponent = class ProductComponent {
    constructor(productService, itemService, activatedRoute) {
        this.productService = productService;
        this.itemService = itemService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.products = yield this.productService.findAll();
            this.activatedRoute.params.subscribe((params) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.id = params['id'];
                if (this.id) {
                    this.selected_product = yield this.productService.find(this.id);
                }
                ;
                this.productService.getProductsByCategory(this.selected_product.category); //get all product with same 'category' as selected product 
            }));
        });
    }
};
ProductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.scss']
    })
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map