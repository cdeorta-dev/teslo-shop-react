import type { Product } from "./product.interface";

//paleta de comando paste json a code
export interface ProductsResponse {
    count:    number;
    pages:    number;
    products: Product[];
}



