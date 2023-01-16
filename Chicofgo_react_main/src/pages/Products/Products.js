import React from 'react';
// import Navbaror from '../../Layout/Navber/navbar'
// import Footer from '../../Layout/Footer/Footer'
import Path from '../../Layout/Item/Path/Path';
import List from './component/List';
import './Products.scss';

const Products = () => {
  return (
    <>
      <Path pathObj={{ path: ['．商品列表'] }} />
      <List />
    </>
  );
};

export default Products;
