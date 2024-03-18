import { Model } from "sequelize";
import Product from "../../models/product";
import { ProductAttributes, ProductInstance } from "../../utils/types/productTypes";
import { ProductRepository } from "../../repository";
import IProductService from "../abstract/productService";

class ProductServiceImplementation implements IProductService {

    repository: ProductRepository;

    constructor() {
        this.repository = new ProductRepository()
    }

    public CreateProduct = async (productData: ProductAttributes): Promise<Model<ProductInstance, ProductAttributes>> => {
        let response = await this.repository.CreateProduct(productData)
        return response
    }

    public UpdateProduct = async (id: string, productData: ProductAttributes): Promise<[affectedCount: number]> => {
        let response = await this.repository.UpdateProduct(id, productData)
        return response
    }

    public GetProductById = async (id: string): Promise<Model<ProductInstance, ProductAttributes> | null> => {
        let response = await this.repository.GetProductById(id)
        return response
    }

    public GetAllProducts = async (page: number, limit: number, keyword: string): Promise<{ rows: ProductInstance[]; count: number; }> => {
        let response = await this.repository.GetAllProducts(page, limit, keyword)
        return response
    }

    public DeleteProduct = async (id: string): Promise<number> => {
        let response = await this.repository.DeleteProduct(id)
        return response
    }

    public BulkDeleteProducts = async (ids: Array<string>): Promise<number> => {
        let response = await this.repository.BulkDeleteProducts(ids)
        return response
    }



}
export default ProductServiceImplementation

