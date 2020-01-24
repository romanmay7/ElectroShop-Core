import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product.entity';
//import { Review } from '../../entities/review.entity';
import {ProductService} from '../../services/product.service';
import {ItemService} from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup,FormControl } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ReviewModel } from '../../entities/reviewmodel.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public products:Product[];
  public id:string;
  public selected_product:Product;
  private reviewForm: FormGroup

    constructor(
        public productService: ProductService,
        public itemService: ItemService,
        public activatedRoute: ActivatedRoute,
        private http: HttpClient,
        public fb: FormBuilder,

    ) 
        {
            this.reviewForm = this.fb.group
           ({
               reviewer_name: [''],
               content: [''],
               rating: [''],
               email:['']
            })
        }

  async ngOnInit() {
    this.products=await this.productService.findAll();
     this.activatedRoute.params.subscribe(async params=>{
       this.id=params['id'];
       if(this.id) { this.selected_product = await  this.productService.find(this.id)};
       this.productService.getProductsByCategory(this.selected_product.category);//get all product with same 'category' as selected product 
    });
    
  }

    public submitReview() {
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

        return this.http.post("api/reviews", review,
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/json; charset=utf-8')
                    //.set('application/x-www-form-urlencoded')
            })
            .subscribe(
                 //Refreshing Reviews List on Products page,after new review was submited by calling product Service
                (response) => { this.UpdateUIafterReviewSubmit(); console.log(response); },
                (error) => console.log(error)
        )
     
        
    }
    public UpdateUIafterReviewSubmit() {
        console.log("Implement method to refresh UI");

    }
}
