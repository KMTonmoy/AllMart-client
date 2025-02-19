'use client'
import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ProductCard from './ProductCard';

const BabySection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/product.json');
                const data = await response.json();
                const babyProducts = data.filter(product => product.gender === 'baby');
                setProducts(babyProducts);
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
            <p>Loading...</p>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3  gap-2">
                {products.filter(product => product.category === category).map(product => (
                    <ProductCard product={product} />
                ))}
            </div>
        ),
    }));

    return (
        <div>
            <div className="text-center mb-6">
                <h1 className="font-bold text-2xl text-black">SHOPPING FOR BABY</h1>
                <p className="text-sm font-medium text-[#C2C2C2]">
                    Teemax store, all the t-shirts, sweatshirts, hoodies, tank tops, mugs that you could be looking for
                </p>
            </div>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
};

export default BabySection;
