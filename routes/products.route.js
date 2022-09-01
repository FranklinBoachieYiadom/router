const router = require("express").Router;
const {
    createProduct,
    deleteProduct,
    getProducts,
    updateProduct,
}= require("../controllers/products.controller");
const ProductRouter = router();

ProductRouter.get("/", getProducts);
ProductRouter.post("/", createProduct);
ProductRouter.patch("/",updateProduct);
ProductRouter.delete("/", deleteProduct);


module.exports = ProductRouter;