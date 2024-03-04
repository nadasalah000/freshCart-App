export interface Product {
    title: string;
    price: number;
    imageCover: string;
    category: CategoryProd;
    ratingsAverage: number;
    _id?: string
}

export interface CategoryProd{
    name: string;
}
