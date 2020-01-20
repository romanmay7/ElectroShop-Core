import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
let IndexComponent = class IndexComponent {
    constructor(productService, itemService) {
        //configs for pagination module
        this.productService = productService;
        this.itemService = itemService;
        this.config = {
            itemsPerPage: 6,
            currentPage: 1,
            totalItems: this.itemService.items.length
        };
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.products = yield this.productService.findAll();
        });
    }
};
IndexComponent = tslib_1.__decorate([
    Component({
        selector: 'app-index',
        templateUrl: './index.component.html',
        styleUrls: ['./index.component.scss'],
        providers: [FilterPipe]
    })
], IndexComponent);
export { IndexComponent };
//# sourceMappingURL=index.component.js.map