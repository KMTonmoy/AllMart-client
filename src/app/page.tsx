import Banner from '@/components/Banner';
import ShoppingByCategories from '@/components/ShoppingByCategories';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Banner />
      <ShoppingByCategories />
    </div>
  );
};

export default page;