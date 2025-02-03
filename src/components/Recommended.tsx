'use client'
import React from 'react';

const Recommended = () => {
    return (
        <div className='px-10'>
            <div>
                <h1 className="font-bold text-2xl text-black">SHOPPING BY CATEGORIES</h1>
            </div>

            <div className='flex space-x-4 mt-4'>
                <div className='w-[300px] hover:cursor-pointer flex flex-col p-2 border-2 relative group'>
                    <img
                        src="https://mediamart-vinovatheme.myshopify.com/cdn/shop/products/16_7ddf94ee-ae5c-44ed-8d85-3cb692e082bf_260x322.jpg?v=1598340377"
                        alt="Recommended Product"
                        className="w-full h-auto object-cover"
                    />

                    {/* Product Info */}
                    <div className='mt-5'>
                        <p>Diamond Halo Stud Eget</p>
                        <p className='font-bold text-orange-600'>Price: 15</p>
                    </div>

                    {/* "Add to Cart" Button */}
                    <button className='absolute inset-0 h-[50px] top-[89%] bg-black text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Recommended;
