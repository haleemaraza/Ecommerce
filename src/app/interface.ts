export interface simplifiedProduct {
    _id:string;
    imageUrl:string;
    name:string;
    price:number;
    categoryName:string;
    slug:string
}

export interface fullProduct {
    _id:string;
    images:any;
    name:string;
    price:number;
    categoryName:string;
    slug:string;
    description: string;
    price_id: string;
}