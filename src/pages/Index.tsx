
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-100 to-violet-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between">
              <div className="sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-shop-gray tracking-tight sm:text-5xl">
                  Find Your Perfect Items
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Discover our curated collection of premium products for every style and occasion.
                </p>
                <div className="mt-8">
                  <Button 
                    asChild
                    className="bg-shop-purple hover:bg-shop-purple-dark"
                  >
                    <Link to="/products">
                      Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-8 sm:mt-0 sm:ml-8 sm:flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Shopping"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md sm:max-w-xs"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-shop-gray">Featured Products</h2>
            <Link 
              to="/products" 
              className="text-shop-purple hover:text-shop-purple-dark flex items-center"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </section>
        
        {/* Categories Section */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-shop-gray mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <Link to="/categories?category=electronics" className="group block">
                <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 aspect-square relative">
                  <img 
                    src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Electronics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white font-medium p-4">Electronics</h3>
                  </div>
                </div>
              </Link>
              <Link to="/categories?category=home" className="group block">
                <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 aspect-square relative">
                  <img 
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                    alt="Home"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white font-medium p-4">Home</h3>
                  </div>
                </div>
              </Link>
              <Link to="/categories?category=fashion" className="group block">
                <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 aspect-square relative">
                  <img 
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                    alt="Fashion"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white font-medium p-4">Fashion</h3>
                  </div>
                </div>
              </Link>
              <Link to="/categories?category=accessories" className="group block">
                <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 aspect-square relative">
                  <img 
                    src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Accessories"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white font-medium p-4">Accessories</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-shop-purple rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-purple-100 mb-6">
                Subscribe to get exclusive offers, new product announcements, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-shop-purple hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
