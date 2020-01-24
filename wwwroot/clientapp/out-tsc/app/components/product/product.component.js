import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { ReviewModel } from '../../entities/reviewmodel.entity';
let ProductComponent = class ProductComponent {
    constructor(productService, itemService, activatedRoute, http, fb) {
        this.productService = productService;
        this.itemService = itemService;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.fb = fb;
        this.reviewForm = this.fb.group({
            reviewer_name: [''],
            content: [''],
            rating: [''],
            email: ['']
        });
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
    submitReview() {
        //console.log("Submitting");
        //var formData: any = new FormData();
        //formData.append("reviewer_name", this.reviewForm.get('reviewer_name').value);
        //formData.append("content", this.reviewForm.get('content').value);
        //formData.append("rating", this.reviewForm.get('rating').value);
        //formData.append("email", this.reviewForm.get('email').value);
        var review = new ReviewModel();
        review.product = this.selected_product;
        review.reviewername = this.reviewForm.get('reviewer_name').value;
        review.content = this.reviewForm.get('content').value;
        review.rating = this.reviewForm.get('rating').value;
        review.email = this.reviewForm.get('email').value;
        return this.http.post("api/reviews", review, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json; charset=utf-8')
            //.set('application/x-www-form-urlencoded')
        })
            .subscribe(
        //Refreshing Reviews List on Products page,after new review was submited by calling product Service
        (response) => { this.productService.loadProducts(); console.log(response); }, (error) => console.log(error));
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