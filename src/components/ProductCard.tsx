
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 truncate">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-lg font-semibold text-shop-purple">${product.price.toFixed(2)}</p>
            <Button 
              onClick={handleAddToCart} 
              size="sm" 
              className="bg-shop-purple hover:bg-shop-purple-dark"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
