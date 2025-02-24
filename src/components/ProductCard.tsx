import React, { useState } from 'react';

interface Product {
    _id: string;
    name: string;
    category: string;
    price: number;
    tags: string[];
    description: string;
    stock: number;
    colors: string[];
    images: string[];
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div>
            <a href={`shop/${product._id}`}>
                <div
                    className="w-[300px] duration-300 hover:cursor-pointer flex flex-col p-2 border-2 relative group overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ transition: 'transform 0.3s ease' }}
                >
                    {/* Image Section */}
                    <div className="h-[300px] overflow-hidden flex justify-center items-center bg-gray-100">
                        <img
                            src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="mt-5 text-center">
                        <p className="font-medium text-lg">{product.name}</p>
                        <p className="font-bold text-orange-600">Price: ${product.price}</p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        className={`absolute bottom-0 left-0 right-0 h-[50px] bg-black text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'
                            }`}
                    >
                        Add to Cart
                    </button>
                </div>
            </a>
        </div>
    );
};

export default ProductCard;
