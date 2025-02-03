import React from 'react';
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
    return (
        <div>
            <div className='w-[300px] hover:cursor-pointer flex flex-col p-2 border-2 relative group'>
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-auto object-cover"
                />

                <div className='mt-5'>
                    <p>{product.name}</p>
                    <p className='font-bold text-orange-600'>Price: {product.price}</p>
                </div>

                <button className='absolute inset-0 h-[50px] top-[89%] bg-black text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;