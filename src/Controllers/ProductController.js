const ProductModel = require('../Models/ProductModel');

class ProductController {

    async store(req, res) {

        const { title, description, price } = req.body;

        const productAlreadyExists = await ProductModel.findOne({ title });

        if (productAlreadyExists) {

            return res.status(400).json({ message: "This name already exists!" });

        }

        if (!title || !description || !price) {

            return res.status(400).json({ message: "Tile, description and Price is required" });

        }

        const createProduct = await ProductModel.create(req.body);

        return res.status(200).json(createProduct);
    }

    async index(req, res) {

        const products = await ProductModel.find();

        return res.status(200).json(products);
    }

    async show(req, res) {

        try {

            const { id } = req.params;

            const product = await ProductModel.findById(id);

            if (!product) {

                return res.status(404).json({ message: "Product does not exists" });
            }

            return res.status(200).json(product);

        } catch (error) {

            return res.status(404).json({ message: "Failed to list product" });

        }

    }

    async update(req, res) {

        try {

            const { id } = req.params;

            await ProductModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ message: "Product updated." });

        } catch (error) {

            return res.status(404).json({ message: "Failed to update product" });

        }
    }

    async destroy(req, res) {

        try {

            const { id } = req.params;

            const productDelete = await ProductModel.findByIdAndDelete(id);

            if (!productDelete) {

                return res.status(404).json({ message: "Products does not exists" });

            }

            return res.status(200).json({ message: "Product deleted." });

        } catch (error) {

            return res.status(404).json({ message: "Failed to deleted product." });

        }
    }
}

module.exports = new ProductController();