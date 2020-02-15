import { Review } from './review.entity';

export class Product 
{
 id:string;
 category:string;
 title:string;
 price:number;
 photo:string;
 description:string;
 reviews:Review[];

}