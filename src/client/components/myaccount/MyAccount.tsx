import { FaCog } from "react-icons/fa";
import { Link } from "react-router";


const MyAccount = () => {
   return (
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white p-4 md:p-8 py-10">
         <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Header */}
            <div className="flex items-center justify-between gap-4">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-300 flex justify-center items-center text-xl font-bold text-white">
                     🙂
                  </div>
                  <div>
                     <h1 className="text-lg font-bold text-gray-800">Reed Hester</h1>
                     <p className="text-sm text-gray-600">01827059564</p>
                  </div>
               </div>

               <Link to={"/satting"}><div className="w-9 h-9 bg-white flex justify-center items-center rounded-full">
                  <FaCog className="text-xl" />
               </div></Link>
            </div>

            {/* Orders Tabs */}
            <div className="flex justify-between items-center flex-wrap gap-4 text-center text-sm py-7 font-medium text-gray-700">
               {[
                  { icon: '📦', label: 'Placed' },
                  { icon: '🚚', label: 'To Ship' },
                  { icon: '📥', label: 'Received' },
                  { icon: '❌', label: 'Cancelled' },
                  { icon: '📑', label: 'All Orders' },
               ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center px-4">
                     <div className=" rounded-full text-2xl text-white flex items-center justify-center md:text-3xl">
                        {item.icon}
                     </div>
                     <span className="mt-1 lg:text-xl">{item.label}</span>
                  </div>
               ))}
            </div>


            {/* Claim Coins and Get Discounts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
                  <img
                     src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
                     alt="Claim"
                     className="w-12 h-12"
                  />
                  <div>
                     <p className="text-sm font-medium text-gray-700">Claim Coins</p>
                     <p className="text-xs text-gray-500">You’ve earned 0 coins by shopping</p>
                  </div>
               </div>

               <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
                  <img
                     src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                     alt="Discounts"
                     className="w-12 h-12"
                  />
                  <div>
                     <p className="text-sm font-medium text-gray-700">Get Coins & Discounts</p>
                     <p className="text-xs text-gray-500">Keep shopping to earn more rewards.</p>
                  </div>
               </div>
            </div>

            {/* Available Coins */}
            <div className="text-center text-sm font-medium text-gray-700">
               ব্যবহারেরযোগ্য কয়েন: <span className="text-yellow-500">🪙 ০০</span>
            </div>

            {/* Discount Tiers */}
            <div className="space-y-4">
               {[
                  { coins: 500, discount: 30 },
                  { coins: 1000, discount: 70 },
                  { coins: 1500, discount: 120 },
               ].map((item, index) => (
                  <div
                     key={index}
                     className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-4 rounded-xl shadow"
                  >
                     <div className="text-center sm:text-left text-sm sm:text-base font-semibold">
                        {item.discount} টাকা ডিসকাউন্ট পাবেন {item.coins} কয়েন ব্যবহার করলে।
                     </div>
                     <button className="mt-3 sm:mt-0 bg-white text-pink-600 font-semibold px-4 py-1 rounded-md shadow-sm">
                        সংগ্রহ করুন
                     </button>
                  </div>
               ))}
            </div>

            {/* Continue Shopping */}
            <div className="text-center">
               <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold shadow">
                  Continue Shopping
               </button>
            </div>
         </div>
      </div>
   );
};

export default MyAccount;
