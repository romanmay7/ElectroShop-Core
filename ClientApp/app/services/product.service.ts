import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { map } from "rxjs/operators";
//import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';
//import { Review } from '../entities/review.entity';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  public products:Product[]=[];
  public term:any;
  public selectedCategory:any;
  public search_results:Product[];
 
  
    constructor(private http: HttpClient)
    {

        this.selectedCategory = "All Categories";

    }


    async loadProducts()
    {
        this.products = await this.http.get<Product[]>("/api/products").toPromise();
 
     }

    async findAll(): Promise<Product[]>{
        await this.loadProducts();
        return this.products;
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

 
  async find(id:string) {
    return this.products[await this.getSelectedIndex(id)];
  }

  async getProductsByCategory(ctg:string) {

    this.search_results=[];
    for(var i=0;i<this.products.length;i++)
    {
      if(this.products[i].category==ctg)
      {
        this.search_results.push(this.products[i]);
      }
    }
  }

  async getSelectedIndex(id: string) {
    for(var i=0;i<this.products.length;i++)
    {
      if(this.products[i].id==id)
      {
        return i;
      }
    }
    return -1; 
  }
  averageRating(p:Product):number
  {
  if(p.reviews.length)
  {
    var total=0;
    for(var i=0;i<p.reviews.length;i++)
    {
       total+=p.reviews[i].rating;
    }

    return total/p.reviews.length;
  }
  else return 0;
}

  round(n:number):number{
    return Math.floor(n);
  }

}


