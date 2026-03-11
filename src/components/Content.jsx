import { useState, useEffect } from "react";
import axios from "axios";
import "./Content.css";

const API_URL = import.meta.env.VITE_API_URL;

function Content() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${API_URL}/store`);
            setProducts(res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="row">

            {products.map((product) => (
                <div className="box" key={product._id}>
                    <img
                        src={`${API_URL}/${product.imageUrl}`}
                        width="300"
                        alt={product.name}
                    />
                    <h3>{product.name}</h3>
                    <p>{product.desc}</p>
                    <h4>{product.price}</h4>
                </div>
            ))}

        </div>
    );
}

export default Content;