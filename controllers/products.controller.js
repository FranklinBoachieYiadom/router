const getProducts = (req,res)=> {
    res.status(200).send ("Get all products");
};

const createProduct = (req,res)=> {
    res.status(201).send ("Poducts have been craeted");
};

const updateProduct = (req,res)=> {
    res.status(200).send ("Poducts have been updated");
};

const deleteProduct = (req,res)=> {
    res.status(200).send ("Poducts have been deleted");
};

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};