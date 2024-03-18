import { Model } from "sequelize"
import { ProductAttributes, ProductInstance } from "../../utils/types/productTypes"
import Product from "../../models/product"

class ProductRepository {

    constructor() {

    }

    public CreateProduct = async (productData: ProductAttributes): Promise<Model<ProductInstance, ProductAttributes>> => {
        return await Product.create(productData);
    }

    public UpdateProduct = async (id: string, productData: ProductAttributes): Promise<[affectedCount: number]> => {
        return await Product.update(productData, { where: { id: id } });
    }

    public GetProductById = async (id: string): Promise<Model<ProductInstance, ProductAttributes> | null> => {
        return await Product.findByPk(id);
    }

    public GetAllProducts = async (page: number, limit: number, keyword: string): Promise<{ rows: ProductInstance[]; count: number; }> => {
        return await Product.findAndCountAll({
            offset: page,
            limit: limit
        });
    }

    public DeleteProduct = async (id: string): Promise<number> => {
        return await Product.destroy({ where: { id: id } });
    }

    public BulkDeleteProducts = async (ids: Array<string>): Promise<number> => {
        return await Product.destroy({ where: { id: ids } });
    }

}

export default ProductRepository