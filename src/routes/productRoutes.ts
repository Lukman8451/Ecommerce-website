import { Router } from "express";
import { ProductController } from "../controller";

let productController = new ProductController()
let productRouter: Router = Router()



productRouter.post("/createProduct", productController.CreateProduct)

productRouter.put("/updateProduct/:id", productController.UpdateProduct)

productRouter.get("/getProductById/:id", productController.DeleteProductById)
productRouter.get("/getAllProducts", productController.GetAllProducts)

productRouter.delete("/deleteProductById/:id", productController.DeleteProductById)
productRouter.delete("/bulkDeleteProduct", productController.BulkDeleteProducts)

export { productRouter }