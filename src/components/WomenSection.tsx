'use client';
import React, { useEffect, useState } from 'react';
import { Tabs, Skeleton } from 'antd';
import type { TabsProps } from 'antd';
import ProductCard from './ProductCard';

interface Product {
    _id: string;
    name: string;
    gender: string;
    category: string;
    price: number;
    description: string;
    stock: number;
    tags: string[];
    colors: string[];
    images: string[];
}

const WomenSection = () => {
    const [products, setProducts] = useState<Product[]>([]); // ✅ Explicitly set type for useState
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/products');
                const data: Product[] = await response.json(); // ✅ Define data type explicitly
                const womenProducts = data.filter(product => product.gender === 'woman');
                setProducts(womenProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const categories = [...new Set(products.map(product => product.category))];

    const items: TabsProps['items'] = categories.map((category, index) => ({
        key: String(index + 1),
        label: category,
        children: loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="border rounded-lg p-4 shadow-md w-full">
                        <Skeleton.Image active style={{ width: '100%', height: 150 }} />
                        <Skeleton active paragraph={{ rows: 2 }} />
                    </div>
                ))}
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {products.filter(product => product.category === category).map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        ),
    }));

    return (
        <div>
            <div className="text-center mb-6">
                <h1 className="font-bold text-2xl text-black">SHOPPING FOR WOMEN</h1>
                <p className="text-sm font-medium text-[#C2C2C2]">
                    Teemax store, all the t-shirts, sweatshirts, hoodies, tank tops, mugs that you could be looking for
                </p>
            </div>
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="border rounded-lg p-4 shadow-md w-full">
                            <Skeleton.Image active style={{ width: '100%', height: 150 }} />
                            <Skeleton active paragraph={{ rows: 2 }} />
                        </div>
                    ))}
                </div>
            ) : (
                <Tabs defaultActiveKey="1" items={items} />
            )}
        </div>
    );
};

export default WomenSection;
