// export type ProductAttribute = {
//     id?: number;
//     productname?: string;
//     price?: string;
//     category?: string;
//     product_img?: string;
//     createdAt?: Date;
//     updatedAt?: Date;
// }

export interface ProductAttributes {
    id: number;
    productname: string;
    price: string;
    category: string;
    product_img: string;
    createdAt: Date;
    updatedAt: Date;

}

export interface ProductInstance {
    id: number;
    productname: string;
    price: string;
    category: string;
    product_img: string;
    createdAt: Date;
    updatedAt: Date;
}