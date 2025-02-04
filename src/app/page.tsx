import Banner from '@/components/Banner';
import HelloSummer from '@/components/HelloSummer';
import Recommended from '@/components/Recommended';
import ShoppingByCategories from '@/components/ShoppingByCategories';
import React from 'react';

const page = () => {
  return (
    <div className='flex min-h-screen flex-col gap-10'>
      <Banner />
      <ShoppingByCategories />

      <div className='max-w-7xl mx-auto flex flex-col gap-10 '>
        <Recommended />
        <HelloSummer />
      </div>
    </div>
  );
};

export default page;