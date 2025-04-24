
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold text-shop-purple">ShopSymphony</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="border-transparent text-gray-500 hover:border-shop-purple hover:text-shop-purple inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="border-transparent text-gray-500 hover:border-shop-purple hover:text-shop-purple inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Shop
              </Link>
              <Link
                to="/categories"
                className="border-transparent text-gray-500 hover:border-shop-purple hover:text-shop-purple inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Categories
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/cart">
              <Button variant="ghost" className="relative p-2">
                <ShoppingBag className="h-6 w-6 text-shop-gray" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-shop-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
