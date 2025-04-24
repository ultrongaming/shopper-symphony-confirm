
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Trash, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-shop-gray mb-8">Your Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8">
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <tr key={item.product.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-16 w-16 flex-shrink-0 rounded overflow-hidden mr-4">
                                <img
                                  src={item.product.image}
                                  alt={item.product.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  <Link to={`/product/${item.product.id}`} className="hover:text-shop-purple">
                                    {item.product.name}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">${item.product.price.toFixed(2)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8 rounded-full"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="mx-2 w-8 text-center">{item.quantity}</span>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8 rounded-full"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-shop-purple">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              <Trash className="h-4 w-4 text-red-500" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/products')}
                  >
                    Continue Shopping
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={clearCart}
                    className="text-red-500 border-red-500 hover:bg-red-50"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 lg:mt-0 lg:col-span-4">
                <div className="bg-white shadow-sm rounded-lg p-6 border">
                  <h2 className="text-lg font-medium text-shop-gray">Order Summary</h2>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Subtotal</p>
                      <p className="text-sm font-medium text-gray-900">${getCartTotal().toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Shipping</p>
                      <p className="text-sm font-medium text-gray-900">Free</p>
                    </div>
                    <div className="border-t pt-4 flex justify-between">
                      <p className="text-base font-medium text-gray-900">Order Total</p>
                      <p className="text-base font-bold text-shop-purple">${getCartTotal().toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="w-full bg-shop-purple hover:bg-shop-purple-dark"
                      onClick={() => navigate('/checkout')}
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                <ShoppingBag className="h-full w-full" />
              </div>
              <h2 className="text-2xl font-medium text-shop-gray mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Button 
                onClick={() => navigate('/products')} 
                className="bg-shop-purple hover:bg-shop-purple-dark"
              >
                Start Shopping
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
