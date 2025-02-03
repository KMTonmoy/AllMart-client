'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

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

const Recommended: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('/product.json')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.slice(-4)); // Get the last 4 products
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div  >
            <div className='mb-5'>
                <h1 className="font-bold text-2xl md:text-left text-center text-black">SHOPPING BY CATEGORIES</h1>
            </div>

            <div className='flex justify-center flex-wrap gap-4  mt-4'>
                {products.map((product, index) => (
                    <ProductCard product={product} key={index}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default Recommended;
