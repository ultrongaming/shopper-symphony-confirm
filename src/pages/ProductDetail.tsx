
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = getProductById(parseInt(id || '0'));
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-shop-gray mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/products')}>
              Return to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product Image */}
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="mt-10 lg:mt-0 lg:pl-8">
              <h1 className="text-3xl font-bold text-shop-gray">{product.name}</h1>
              
              <div className="mt-3">
                <p className="text-3xl text-shop-purple font-semibold">${product.price.toFixed(2)}</p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-shop-gray">Description</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-shop-gray">Category</h3>
                <p className="mt-2 text-gray-600 capitalize">{product.category}</p>
              </div>
              
              <div className="mt-10 flex flex-col space-y-4">
                <Button 
                  onClick={() => addToCart(product)} 
                  className="w-full bg-shop-purple hover:bg-shop-purple-dark"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/products')}
                  className="w-full"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
