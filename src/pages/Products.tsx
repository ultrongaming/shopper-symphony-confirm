
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-shop-gray mb-8">All Products</h1>
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
