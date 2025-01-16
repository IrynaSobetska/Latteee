export interface ProductDetails {
    id: number,
    name: string,
    description: string,
    list: any,
    img: string,
    ingredients: any[] | null;
    sizeOptions: any[] | null;
    price: any[] | null;
}
