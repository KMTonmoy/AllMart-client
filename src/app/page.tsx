import Banner from '@/components/Banner';
import Recommended from '@/components/Recommended';
import ShoppingByCategories from '@/components/ShoppingByCategories';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Banner />
      <ShoppingByCategories />

      <div className='max-w-7xl mx-auto'>
        <Recommended />
      </div>
    </div>
  );
};

export default page;