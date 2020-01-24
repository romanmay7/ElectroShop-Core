import { Product } from './product.entity';

export class ReviewModel {
    id: string;
    reviewername: string;
    date: string;
    content: string;
    rating: number;
    email: string;
    product: Product;
}

