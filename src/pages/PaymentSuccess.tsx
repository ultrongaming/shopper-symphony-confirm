
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const PaymentSuccess = () => {
  const orderNumber = `ORD-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  useEffect(() => {
    // Show a toast notification
    toast({
      title: "Order confirmed",
      description: "Thank you for your purchase! We'll send a confirmation email shortly.",
    });
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white shadow-sm rounded-lg p-8 border text-center">
            <div className="mx-auto h-24 w-24 text-shop-purple mb-6">
              <CheckCircle className="h-full w-full" />
            </div>
            
            <h1 className="text-3xl font-bold text-shop-gray mb-3">Thank You for Your Order!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Your order has been received and is being processed.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-md inline-block mb-8">
              <p className="text-sm text-gray-500">Order Number</p>
              <p className="text-xl font-semibold text-shop-purple">{orderNumber}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-shop-gray mb-4">What's Next?</h2>
              <div className="text-left max-w-md mx-auto">
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-shop-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 flex-shrink-0">1</span>
                    <span>You'll receive an email confirmation with your order details.</span>
                  </li>
                  <li className="flex">
                    <span className="bg-shop-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 flex-shrink-0">2</span>
                    <span>Our team will prepare your items for shipping.</span>
                  </li>
                  <li className="flex">
                    <span className="bg-shop-purple text-white rounded-full w-6 h-6 flex items-center justify-center font-medium text-sm mr-3 flex-shrink-0">3</span>
                    <span>Once shipped, we'll send you tracking information.</span>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-shop-purple hover:bg-shop-purple-dark">
                <Link to="/">
                  Return to Home
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/products">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
