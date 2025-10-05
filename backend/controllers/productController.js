import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

//fuction for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesURL = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? "true" : "false",
      sizes: JSON.parse(sizes),
      image: imagesURL,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);

    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//fuction for list product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//fuction for removing product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//fuction for single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const aiFilterProducts = async (req, res) => {
    const { query } = req.body; // e.g., "I need a jacket under 5000"

    // 1. Define the system's role (the key to reliable AI results)
    const systemInstruction = `You are a product filter expert for an e-commerce store. 
    Analyze the user's clothing budget query and return ONLY a single JSON object. 
    The JSON must contain 'priceMin', 'priceMax' (in Indian Rupees), and 'category' (e.g., 'Jacket', 'T-Shirt', or 'All'). 
    If a maximum budget is mentioned (e.g., under 5000), set priceMax to 5000 and priceMin to 0.`;
    
    try {
        // Conceptual call to the AI Model
        /*
        const response = await aiService.generateContent({
            prompt: query,
            systemInstruction: systemInstruction,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "object",
                    properties: {
                        priceMin: { type: "number" },
                        priceMax: { type: "number" },
                        category: { type: "string" }
                    }
                }
            }
        });
        const filterCriteria = JSON.parse(response.text);
        
        // 2. Filter products based on AI criteria (using existing logic)
        const allProducts = await productModel.find({}); // Fetch all products 
        
        const filteredProducts = allProducts.filter(p => {
            const priceMatch = p.price >= filterCriteria.priceMin && p.price <= filterCriteria.priceMax;
            const categoryMatch = filterCriteria.category === 'All' || p.category === filterCriteria.category;
            return priceMatch && categoryMatch;
        });

        res.json({ success: true, products: filteredProducts });
        */

        // --- TEMPORARY MOCK RESPONSE FOR TESTING ---
        const mockFilter = { priceMin: 0, priceMax: 5000, category: 'Jacket' };
        // You would replace this mock logic with the actual database filter logic above
        // For now, return the mock criteria:
        res.json({ success: true, filterCriteria: mockFilter, message: "Use this criteria to filter the products list on the frontend." });
        
    } catch (error) {
        console.error("AI Filtering Error:", error);
        res.json({ success: false, message: "AI processing failed. Please try again." });
    }
};
export { listProducts, addProduct, removeProduct, singleProduct, aiFilterProducts };
