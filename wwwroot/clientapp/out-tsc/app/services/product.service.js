import * as tslib_1 from "tslib";
//import { map } from "rxjs/operators";
//import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.products = [];
        this.selectedCategory = "All Categories";
    }
    loadProducts() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.products = yield this.http.get("/api/products").toPromise();
        });
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.loadProducts();
            return this.products;
        });
    }
    //loadProducts(): Observable<boolean> {
    //    console.log("got here")
    //    return this.http.get("/api/products")
    //        .pipe(
    //            map((data: any[]) => {
    //                this.products = data;
    //                return true;
    //            })
    //        );
    //}
    find(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.products[yield this.getSelectedIndex(id)];
        });
    }
    getProductsByCategory(ctg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.search_results = [];
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].category == ctg) {
                    this.search_results.push(this.products[i]);
                }
            }
        });
    }
    getSelectedIndex(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id == id) {
                    return i;
                }
            }
            return -1;
        });
    }
    averageRating(p) {
        if (p.reviews.length) {
            var total = 0;
            for (var i = 0; i < p.reviews.length; i++) {
                total += p.reviews[i].rating;
            }
            return total / p.reviews.length;
        }
        else
            return 0;
    }
    round(n) {
        return Math.floor(n);
    }
};
ProductService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map