
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CreditCard, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    // Format with spaces every 4 digits
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    // Limit to 19 characters (16 digits + 3 spaces)
    value = value.slice(0, 19);
    setFormData(prev => ({ ...prev, cardNumber: value }));
  };
  
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    setFormData(prev => ({ ...prev, cardExpiry: value }));
  };
  
  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.slice(0, 3);
    setFormData(prev => ({ ...prev, cardCvc: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checkout",
        variant: "destructive",
      });
      navigate('/products');
      return;
    }
    
    // Check for required fields
    const requiredFields = [
      'name', 'email', 'address', 'city', 
      'postalCode', 'country', 'cardNumber', 
      'cardExpiry', 'cardCvc'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Simple validation
    if (!formData.email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.cardNumber.replace(/\s/g, '').length !== 16) {
      toast({
        title: "Invalid card number",
        description: "Please enter a valid 16-digit card number",
        variant: "destructive",
      });
      return;
    }
    
    // Process payment
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
      // Show success toast
      toast({
        title: "Order confirmed! 🎉",
        description: "Your payment was successful and your order is on its way!",
      });
      
      // After a brief delay, clear cart and navigate to success page
      setTimeout(() => {
        clearCart();
        navigate('/payment-success');
      }, 1500);
    }, 2000);
  };
  
  if (paymentSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <div className="mx-auto h-24 w-24 text-shop-purple mb-4">
              <CheckCircle className="h-full w-full" />
            </div>
            <h1 className="text-2xl font-bold text-shop-gray mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-8">
              Your order has been confirmed and will be shipped soon.
            </p>
            <p className="text-gray-600 mb-8">
              Redirecting to order confirmation...
            </p>
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
          <h1 className="text-3xl font-bold text-shop-gray mb-8">Checkout</h1>
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-shop-gray mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-shop-gray mb-4">Shipping Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        placeholder="123 Main St"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleChange} 
                          placeholder="Los Angeles"
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input 
                          id="postalCode" 
                          name="postalCode" 
                          value={formData.postalCode} 
                          onChange={handleChange} 
                          placeholder="90001"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input 
                        id="country" 
                        name="country" 
                        value={formData.country} 
                        onChange={handleChange} 
                        placeholder="United States"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-shop-gray mb-4">Payment Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        name="cardNumber" 
                        value={formData.cardNumber} 
                        onChange={handleCardNumberChange} 
                        placeholder="4242 4242 4242 4242"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry">Expiry Date (MM/YY)</Label>
                        <Input 
                          id="cardExpiry" 
                          name="cardExpiry" 
                          value={formData.cardExpiry} 
                          onChange={handleExpiryChange} 
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardCvc">CVC</Label>
                        <Input 
                          id="cardCvc" 
                          name="cardCvc" 
                          value={formData.cardCvc} 
                          onChange={handleCvcChange} 
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-shop-purple hover:bg-shop-purple-dark mt-4"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Processing...
                    </div>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      Pay ${getCartTotal().toFixed(2)}
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="mt-10 lg:mt-0 lg:col-span-5">
              <div className="bg-white shadow-sm rounded-lg p-6 border sticky top-8">
                <h2 className="text-lg font-medium text-shop-gray">Order Summary</h2>
                
                <div className="mt-6 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden mr-2">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-900">{item.product.name} x {item.quantity}</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4 flex justify-between">
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
