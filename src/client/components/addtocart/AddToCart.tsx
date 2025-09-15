import { useState } from "react";
import { FiTrash2, FiChevronLeft, FiStar } from "react-icons/fi";

function AddToCart() {
   const [cartItems, setCartItems] = useState([
      {
         id: 1,
         name: "Lava Humidifier",
         price: 2780,
         originalPrice: 3080,
         discount: 300,
         rating: 4.5,
         reviews: 24,
         sold: 3,
         quantity: 1,
         imageUrl: "https://i.ibb.co/V0Lxg87n/Add-a-subheading-1.png",
      },
      {
         id: 2,
         name: "Mini Lava Humidifier",
         price: 1990,
         originalPrice: 2290,
         discount: 300,
         rating: 4.2,
         reviews: 15,
         sold: 7,
         quantity: 1,
         imageUrl: "https://i.ibb.co/35F4YMMN/download-3.jpg",
      },
      {
         id: 1,
         name: "Lava Humidifier",
         price: 2780,
         originalPrice: 3080,
         discount: 300,
         rating: 4.5,
         reviews: 24,
         sold: 3,
         quantity: 1,
         imageUrl: "https://i.ibb.co/V0Lxg87n/Add-a-subheading-1.png",
      },
      {
         id: 2,
         name: "Mini Lava Humidifier",
         price: 1990,
         originalPrice: 2290,
         discount: 300,
         rating: 4.2,
         reviews: 15,
         sold: 7,
         quantity: 1,
         imageUrl: "https://i.ibb.co/35F4YMMN/download-3.jpg",
      },
   ]);

   const getTotalPrice = () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

   const getTotalDiscount = () =>
      cartItems.reduce(
         (total, item) =>
            total + (item.originalPrice - item.price) * item.quantity,
         0
      );

   const handleIncrement = (id) => {
      setCartItems(
         cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
         )
      );
   };

   const handleDecrement = (id) => {
      setCartItems(
         cartItems.map((item) =>
            item.id === id
               ? { ...item, quantity: Math.max(1, item.quantity - 1) }
               : item
         )
      );
   };

   const handleRemove = (id) => {
      setCartItems(cartItems.filter((item) => item.id !== id));
   };

   return (
      <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between mb-6">
               <button className="flex items-center text-blue-600 hover:text-blue-800 mb-4 sm:mb-0">
                  <FiChevronLeft className="mr-1" /> Continue Shopping
               </button>
               <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Your Cart ({cartItems.length})
               </h1>
            </div>

            {cartItems.length === 0 ? (
               <div className="text-center py-12">
                  <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-full mb-4"></div>
                  <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                     Your cart is empty
                  </h2>
                  <p className="text-gray-500 mb-6 text-sm sm:text-base">
                     Looks like you haven't added anything to your cart yet
                  </p>
                  <button className="px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                     Continue Shopping
                  </button>
               </div>
            ) : (
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Cart Items */}
                     <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                           <ul className="divide-y divide-gray-200">
                              {cartItems.map((item) => (
                                 <li key={item.id} className="p-4 sm:p-6">
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

                                       {/* Left: Image + Info */}
                                       <div className="flex gap-4 flex-1">
                                          <img
                                             src={item.imageUrl}
                                             alt={item.name}
                                             className="w-14 h-14 md:w-24 md:h-24 object-contain rounded-lg"
                                          />

                                          <div className="flex flex-col justify-between">
                                             <div>
                                                <h3 className="text-sm md:text-lg font-medium text-gray-900">
                                                   {item.name}
                                                </h3>
                                                <div className="flex items-center mt-1 text-sm text-gray-500 flex-wrap">
                                                   <FiStar className="text-yellow-400 mr-1" />
                                                   {item.rating} | {item.reviews} reviews | {item.sold} sold
                                                </div>
                                             </div>

                                             {/* Quantity Controls */}
                                             <div className="mt-4 flex items-center">
                                                <button
                                                   onClick={() => handleDecrement(item.id)}
                                                   className="w-8 h-8 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                                                >
                                                   −
                                                </button>
                                                <div className="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                                                   {item.quantity}
                                                </div>
                                                <button
                                                   onClick={() => handleIncrement(item.id)}
                                                   className="w-8 h-8 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                                                >
                                                   +
                                                </button>
                                             </div>
                                          </div>
                                       </div>

                                       <div className="mb-2 ">
                                          <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                                             ₹{item.price.toLocaleString()}
                                          </div>

                                          {item.discount > 0 && (
                                             <div className="mt-1 text-sm">
                                                <div className="text-gray-400 line-through">
                                                   ₹{item.originalPrice.toLocaleString()}
                                                </div>
                                                <div className="text-green-600 font-medium">
                                                   You save ₹{item.discount.toLocaleString()}
                                                </div>
                                             </div>
                                          )}
                                       </div>


                                       {/* Right: Price + Remove */}
                                       <div className="flex flex-col justify-between items-end">
                                          
                                          {/* Remove Button */}
                                          <button
                                             onClick={() => handleRemove(item.id)}
                                             className="text-red-500 hover:bg-red-100 transition p-2 rounded-full"
                                             title="Remove item"
                                          >
                                             <FiTrash2 size={18} />
                                          </button>
                                       </div>
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>



                  {/* Order Summary */}
                  <div>
                     <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
                        <h2 className="text-lg font-medium text-gray-900 mb-6">
                           Order Summary
                        </h2>

                        <div className="space-y-4 text-sm sm:text-base">
                           <div className="flex justify-between">
                              <span className="text-gray-600">Subtotal</span>
                              <span className="text-gray-900">
                                 ₹{getTotalPrice().toLocaleString()}
                              </span>
                           </div>
                           <div className="flex justify-between">
                              <span className="text-gray-600">Discount</span>
                              <span className="text-green-600">
                                 -₹{getTotalDiscount().toLocaleString()}
                              </span>
                           </div>
                           <div className="flex justify-between">
                              <span className="text-gray-600">Shipping</span>
                              <span className="text-gray-900">Free</span>
                           </div>
                           <div className="border-t border-gray-200 pt-4 mt-4">
                              <div className="flex justify-between font-medium text-gray-900">
                                 <span>Total</span>
                                 <span>₹{getTotalPrice().toLocaleString()}</span>
                              </div>
                           </div>
                        </div>

                        <button className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                           Proceed to Checkout
                        </button>

                        <div className="mt-4 flex items-center justify-center text-sm">
                           <span className="text-gray-500 mr-1">or</span>
                           <button className="text-blue-600 hover:text-blue-800">
                              Continue Shopping
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

export default AddToCart;
