import { Request, Response } from "express"
import { ProductServiceImplementation } from '../service/concrete/index'


class ProductController {

    productService: ProductServiceImplementation

    constructor() {
        this.productService = new ProductServiceImplementation()
    }

    public CreateProduct = async (req: Request, res: Response) => {
        let productData = req.body
        if (productData.productname == null || productData.productname == undefined || productData.price == null || productData.price == undefined) {
            res.status(400).json({ error: "Product requirements not satisfied" });
        } else {
            try {
                let response = await this.productService.CreateProduct(productData);
                if (response) {
                    res.status(200).json({ data: response })
                } else {
                    res.status(200).json({ error: "Please try to create again" });
                }
            } catch (error: unknown | any) {
                res.status(400).json({ error: error.message });
            }
        }
    }

    public UpdateProduct = async (req: Request, res: Response) => {
        let productData = req.body
        let id = req.params.id
        if (productData.name == null || productData.name == undefined || productData.price == null || productData.price == undefined) {
            res.status(400).json({ error: "Product requirements not satisfied" });
        }
        else if (id == null || id == undefined) {
            res.status(400).json({ error: "please provide id to update" });
        }
        else {
            try {
                let response: [affectedCount: number] = await this.productService.UpdateProduct(id, productData);
                if (typeof response == "number") {
                    response > 0 ? res.status(200).json({ data: response }) : res.status(400).json({ error: "cannot update please try again" })
                } else {
                    res.status(200).json({ error: "Please try to create again" });
                }
            } catch (error: unknown | any) {
                res.status(400).json({ error: error.message });
            }
        }
    }

    public GetProductById = async (req: Request, res: Response) => {
        let id = req.params.id
        if (id == undefined || id == null || id == "" || id == ":id") {
            res.status(400).json({ error: "please provide id" });
        } else {
            try {
                let response = await this.productService.GetProductById(id);
                if (response) {
                    res.status(200).json({ data: response })
                } else {
                    res.status(200).json({ error: "Please try to create again" });
                }
            } catch (error: unknown | any) {
                res.status(400).json({ error: error.message });
            }
        }
    }

    public GetAllProducts = async (req: Request, res: Response) => {

        let page = req.query.page as string | number
        let limit = req.query.limit as string | number
        let keyword = req.query.keyword as string

        if (page == null || page == undefined || limit == null || limit == undefined) {
            page = 1
            limit = 10
        }
        let offset = (Number(page) - 1) * Number(limit)
        keyword = keyword == null || keyword == undefined ? "" : keyword
        try {
            let response = await this.productService.GetAllProducts(offset, Number(limit), keyword);
            if (response.count > 0) {
                res.status(200).json({ data: response })
            } else {
                res.status(200).json({ message: "No data found", response });
            }
        } catch (error: unknown | any) {
            res.status(400).json({ error: error.message });
        }

    }

    public DeleteProductById = async (req: Request, res: Response) => {
        let id = req.params.id
        if (id == undefined || id == null || id == "" || id == ":id") {
            res.status(400).json({ error: "please provide id" });
        } else {
            try {
                let response: number = await this.productService.DeleteProduct(id);
                if (response > 0) {
                    res.status(200).json({ data: response })
                } else {
                    res.status(200).json({ error: "Please try to create again" });
                }
            } catch (error: unknown | any) {
                res.status(400).json({ error: error.message });
            }
        }
    }

    public BulkDeleteProducts = async (req: Request, res: Response) => {
        let ids = req.body
        if (ids == undefined || ids == null || ids == "") {
            res.status(400).json({ error: "please provide id" });
        } else {
            try {
                let response: number = await this.productService.BulkDeleteProducts(ids);
                if (response > 0) {
                    res.status(200).json({ data: response, message: "All Deleted Successfully" })
                } else {
                    res.status(200).json({ error: "Please try to create again" });
                }
            } catch (error: unknown | any) {
                res.status(400).json({ error: error.message });
            }
        }
    }

}

export default ProductController