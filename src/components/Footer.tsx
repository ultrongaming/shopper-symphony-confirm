
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-shop-purple">V kart</h3>
            <p className="text-sm text-gray-500">
              Your one-stop shop for quality products with fast delivery and excellent customer service.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-gray-500 hover:text-shop-purple">All Products</Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-gray-500 hover:text-shop-purple">Categories</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-500 hover:text-shop-purple">Featured</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-shop-purple">Help Center</Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-shop-purple">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-shop-purple">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-shop-purple">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-shop-purple">Terms of Service</Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-shop-purple">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} V kart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

