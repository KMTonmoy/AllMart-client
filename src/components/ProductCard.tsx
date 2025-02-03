import React, { useState } from 'react';

interface Product {
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
console.log(product.images[1])
    return (
        <div>
            <a href={`shop/${product.id}`}>
                <div
                    className='w-[300px] duration-700 hover:cursor-pointer flex flex-col p-2 border-2 relative group'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={isHovered ? product.images[1] : product.images[0]}
                        alt={product.name}
                        className="w-full h-auto object-cover"
                    />

                    <div className='mt-5'>
                        <p>{product.name}</p>
                        <p className='font-bold text-orange-600'>Price: {product.price}</p>
                    </div>

                    <button className='absolute duration-500 inset-0 h-[50px] top-[89%] hover:bg-orange-600 bg-black text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                        Add to Cart
                    </button>
                </div>
            </a>
        </div>
    );
};

export default ProductCard;
