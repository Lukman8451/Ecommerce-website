import { Model } from "sequelize";
import { ProductAttributes, ProductInstance } from "../../utils/types/productTypes"

interface IProductService {

    CreateProduct(productData: ProductAttributes): Promise<Model<ProductInstance, ProductAttributes>>

    UpdateProduct(id: string, productData: ProductAttributes): Promise<[affectedCount: number]>

    GetProductById(id: string): Promise<Model<ProductInstance, ProductAttributes> | null>

    GetAllProducts(page: number, limit: number, keyword: string): Promise<{ rows: ProductInstance[]; count: number; }>

    DeleteProduct(id: string): Promise<number>

    BulkDeleteProducts(ids: Array<string>): Promise<number>

}

export default IProductService;