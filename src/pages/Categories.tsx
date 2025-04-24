
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { products, getAllCategories, getProductsByCategory } from '@/data/products';
import { Button } from '@/components/ui/button';

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState(
    initialCategory ? getProductsByCategory(initialCategory) : products
  );
  
  const categories = getAllCategories();
  
  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(getProductsByCategory(selectedCategory));
      setSearchParams({ category: selectedCategory });
    } else {
      setFilteredProducts(products);
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-shop-gray mb-8">Categories</h1>
          
          <div className="mb-8 flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('')}
              className={selectedCategory === '' ? 'bg-shop-purple hover:bg-shop-purple-dark' : ''}
            >
              All
            </Button>
            
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-shop-purple hover:bg-shop-purple-dark' : ''}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
          
          <ProductGrid 
            products={filteredProducts} 
            title={selectedCategory ? 
              `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products` : 
              'All Products'
            } 
          />
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-500">No products found in this category</h3>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
