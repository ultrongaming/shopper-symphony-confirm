
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <div className="flex items-center">
        <Link to="/cart" className="mr-2">
          <Button variant="ghost" className="relative p-2">
            <ShoppingBag className="h-6 w-6 text-shop-gray" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-shop-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </Button>
        </Link>
        <Button variant="ghost" onClick={toggleMenu} className="p-2">
          {isOpen ? (
            <X className="h-6 w-6 text-shop-gray" />
          ) : (
            <Menu className="h-6 w-6 text-shop-gray" />
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xl font-semibold text-shop-purple">ShopSymphony</span>
              </div>
              <div>
                <Button variant="ghost" onClick={toggleMenu} className="p-2">
                  <X className="h-6 w-6 text-shop-gray" />
                </Button>
              </div>
            </div>
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-shop-gray hover:bg-shop-purple-light hover:text-shop-purple"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 rounded-md text-base font-medium text-shop-gray hover:bg-shop-purple-light hover:text-shop-purple"
                onClick={toggleMenu}
              >
                Shop
              </Link>
              <Link
                to="/categories"
                className="block px-3 py-2 rounded-md text-base font-medium text-shop-gray hover:bg-shop-purple-light hover:text-shop-purple"
                onClick={toggleMenu}
              >
                Categories
              </Link>
              <Link
                to="/cart"
                className="block px-3 py-2 rounded-md text-base font-medium text-shop-gray hover:bg-shop-purple-light hover:text-shop-purple"
                onClick={toggleMenu}
              >
                Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
