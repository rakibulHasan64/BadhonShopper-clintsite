// function UserDashboard() {
//    const payments = [
//       {
//          id: 1,
//          name: "রাহুল ইসলাম",
//          status: "Paid",
//          date: "২০২৫-০৭-২০",
//          items: [
//             { product: "নোটবুক", quantity: 2, price: "৫০০৳", total: "১,০০০৳" },
//             { product: "পেন", quantity: 5, price: "১০০৳", total: "৫০০৳" }
//          ],
//          totalAmount: "১,৫০০৳"
//       },
//       {
//          id: 2,
//          name: "সাবিনা আক্তার",
//          status: "Pending",
//          date: "২০২৫-০৭-২৫",
//          items: [
//             { product: "খাতা", quantity: 3, price: "২০০৳", total: "৬০০৳" },
//             { product: "পেন্সিল", quantity: 10, price: "২০৳", total: "২০০৳" },
//             { product: "ইরেজার", quantity: 2, price: "৩০৳", total: "৬০৳" }
//          ],
//          totalAmount: "৮৬০৳"
//       },
//       {
//          id: 3,
//          name: "জনি মিয়া",
//          status: "Unpaid",
//          date: "২০২৫-০৭-৩০",
//          items: [
//             { product: "বই", quantity: 1, price: "৮০০৳", total: "৮০০৳" },
//             { product: "ব্যাগ", quantity: 1, price: "৪০০৳", total: "৪০০৳" }
//          ],
//          totalAmount: "১,২০০৳"
//       },
//    ];

import { useState } from "react";

//    const getStatusColor = (status) => {
//       switch (status) {
//          case "Paid":
//             return "bg-green-100 text-green-800";
//          case "Pending":
//             return "bg-yellow-100 text-yellow-800";
//          case "Unpaid":
//             return "bg-red-100 text-red-800";
//          default:
//             return "";
//       }
//    };

//    return (
//       <div className="p-4 md:p-6 max-w-7xl mx-auto h-screen mt-10">
//          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//             <div>
//                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">ইউজার পেমেন্ট ডিটেইলস</h2>
//                <p className="text-gray-500 mt-1">সকল পেমেন্টের লেনদেনের তালিকা</p>
//             </div>
//             <div className="flex flex-wrap gap-2 w-full md:w-auto">
//                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center w-full md:w-auto">
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                   </svg>
//                   নতুন অর্ডার
//                </button>
//                <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition flex items-center justify-center w-full md:w-auto">
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
//                   </svg>
//                   ফিল্টার
//                </button>
//             </div>
//          </div>

//          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-scroll">
//             <div className="overflow-x-auto">
//                <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                      <tr>
//                         <th className="py-3 px-4 md:px-6 text-right font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">ক্রেতার নাম</th>
//                         <th className="py-3 px-4 md:px-6 text-right font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">স্ট্যাটাস</th>
//                         <th className="py-3 px-4 md:px-6 text-right font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">তারিখ</th>
//                         <th className="py-3 px-4 md:px-6 text-right font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">পণ্য সংখ্যা</th>
//                         <th className="py-3 px-4 md:px-6 text-right font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">মোট টাকা</th>
//                         <th className="py-3 px-4 md:px-6 text-right font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">অ্যাকশন</th>
//                      </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200  ">
//                      {payments.map((payment) => (
//                         <tr key={payment.id} className="hover:bg-gray-50 transition duration-150">
//                            <td className="py-4 px-4 md:px-6 whitespace-nowrap text-right">
//                               <div className="font-medium text-gray-900">{payment.name}</div>
//                               <div className="mt-1 text-xs text-gray-500 hidden">
//                                  {payment.items.map((item, index) => (
//                                     <div key={index}>{item.product} ({item.quantity}x)</div>
//                                  ))}
//                               </div>
//                            </td>
//                            <td className="py-4 px-4 md:px-6 whitespace-nowrap text-right">
//                               <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
//                                  {payment.status}
//                               </span>
//                            </td>
//                            <td className="py-4 px-4 md:px-6 whitespace-nowrap text-right text-gray-500">
//                               {payment.date}
//                            </td>
//                            <td className="py-4 px-4 md:px-6 whitespace-nowrap text-right text-gray-500">
//                               {payment.items.length} টি
//                            </td>
//                            <td className="py-4 px-4 md:px-6 whitespace-nowrap text-right font-semibold text-gray-800">
//                               {payment.totalAmount}
//                            </td>
//                            <td className="py-4 px-4 md:px-6 whitespace-nowrap text-right">
//                               <div className="flex justify-end gap-2">
//                                  <button
//                                     onClick={() => alert(`Invoice for ${payment.name}`)}
//                                     className="text-blue-600 hover:text-blue-900 text-sm flex items-center p-1 md:p-2"
//                                     title="ইনভয়েস"
//                                  >
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                     </svg>
//                                     <span className="hidden md:inline ml-1">ইনভয়েস</span>
//                                  </button>
//                                  <button
//                                     onClick={() => alert(`Edit ${payment.name}`)}
//                                     className="text-gray-600 hover:text-gray-900 text-sm flex items-center p-1 md:p-2"
//                                     title="এডিট"
//                                  >
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                                     </svg>
//                                     <span className="hidden md:inline ml-1">এডিট</span>
//                                  </button>
//                               </div>
//                            </td>
//                         </tr>
//                      ))}
//                   </tbody>
//                </table>
//             </div>

//             <div className="bg-gray-50 px-4 md:px-6 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200">
//                <div className="text-xs md:text-sm text-gray-500 mb-2 sm:mb-0">
//                   মোট {payments.length} টি অর্ডার পাওয়া গেছে
//                </div>
//                <div className="flex gap-2">
//                   <button className="px-3 py-1.5 border border-gray-300 rounded-md text-xs md:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center">
//                      <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                      </svg>
//                      পূর্বের
//                   </button>
//                   <button className="px-3 py-1.5 border border-gray-300 rounded-md text-xs md:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center">
//                      পরের
//                      <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                      </svg>
//                   </button>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// }

// export default UserDashboard;



function UserDashboard() {
   const user = {
      name: "রাহুল ইসলাম",
      email: "rahul@example.com",
      totalOrders: 12,
      totalPaid: "৳৮,২০০"
   };

   const allPayments = [
      {
         id: "PAY001",
         date: "২০২৫-০৭-২০",
         method: "bKash",
         status: "Paid",
         amount: "৳১,৫০০"
      },
      {
         id: "PAY002",
         date: "২০২৫-০৭-২৫",
         method: "Nagad",
         status: "Pending",
         amount: "৳৮৬০"
      },
      {
         id: "PAY003",
         date: "২০২৫-০৭-৩০",
         method: "Cash",
         status: "Unpaid",
         amount: "৳১,২০০"
      },
      {
         id: "PAY004",
         date: "২০২৫-০৮-০১",
         method: "Bank Transfer",
         status: "Paid",
         amount: "৳২,৫০০"
      },
      {
         id: "PAY005",
         date: "২০২৫-০৮-০৫",
         method: "bKash",
         status: "Paid",
         amount: "৳১,৮০০"
      },
      {
         id: "PAY006",
         date: "২০২৫-০৮-১০",
         method: "Nagad",
         status: "Pending",
         amount: "৳৯২০"
      },
      {
         id: "PAY007",
         date: "২০২৫-০৮-১৫",
         method: "Cash",
         status: "Unpaid",
         amount: "৳১,৫০০"
      }
   ];

   // Pagination state
   const [currentPage, setCurrentPage] = useState(1);
   const paymentsPerPage = 4;

   // Calculate current payments
   const indexOfLastPayment = currentPage * paymentsPerPage;
   const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
   const currentPayments = allPayments.slice(indexOfFirstPayment, indexOfLastPayment);
   const totalPages = Math.ceil(allPayments.length / paymentsPerPage);

   const getStatusColor = (status) => {
      switch (status) {
         case "Paid":
            return "bg-green-100 text-green-800";
         case "Pending":
            return "bg-yellow-100 text-yellow-800";
         case "Unpaid":
            return "bg-red-100 text-red-800";
         default:
            return "";
      }
   };

   const handlePrevPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   };

   const handleNextPage = () => {
      if (currentPage < totalPages) {
         setCurrentPage(currentPage + 1);
      }
   };

   return (
      <div className="max-w-6xl mx-auto p-4 md:p-6 mt-8">
         {/* User Info */}
         <div className="bg-white p-4 md:p-6 rounded-xl shadow border mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🧑 ইউজার প্রোফাইল</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">নাম</p>
                  <p className="font-medium">{user.name}</p>
               </div>
               <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">ইমেইল</p>
                  <p className="font-medium">{user.email}</p>
               </div>
               <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">মোট অর্ডার</p>
                  <p className="font-medium">{user.totalOrders}</p>
               </div>
               <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">মোট পেমেন্ট</p>
                  <p className="font-medium">{user.totalPaid}</p>
               </div>
            </div>
         </div>

         {/* Payment History Table */}
         <div className="bg-white p-4 md:p-6 rounded-xl shadow border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
               <h2 className="text-xl font-bold text-gray-800">💳 পেমেন্ট হিস্টরি</h2>
               <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">প্রদর্শন:</span>
                  <select
                     className="border rounded-md px-2 py-1 text-sm"
                     onChange={(e) => setCurrentPage(1)}
                  >
                     <option value="4">4</option>
                     <option value="6">6</option>
                     <option value="10">10</option>
                  </select>
               </div>
            </div>

            <div className="overflow-x-auto">
               <table className="min-w-full divide-y divide-gray-200 text-right text-sm">
                  <thead className="bg-gray-100 text-gray-600 uppercase tracking-wider">
                     <tr>
                        <th className="py-3 px-3">পেমেন্ট আইডি</th>
                        <th className="py-3 px-3">তারিখ</th>
                        <th className="py-3 px-3">পদ্ধতি</th>
                        <th className="py-3 px-3">স্ট্যাটাস</th>
                        <th className="py-3 px-3">পরিমাণ</th>
                        <th className="py-3 px-3">অ্যাকশন</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                     {currentPayments?.map((pay) => (
                        <tr key={pay.id} className="hover:bg-gray-50">
                           <td className="py-3 px-3 font-medium">{pay.id}</td>
                           <td className="py-3 px-3">{pay.date}</td>
                           <td className="py-3 px-3">{pay.method}</td>
                           <td className="py-3 px-3">
                              <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(pay.status)}`}>
                                 {pay.status}
                              </span>
                           </td>
                           <td className="py-3 px-3 font-semibold">{pay.amount}</td>
                           <td className="py-3 px-3">
                              <button
                                 onClick={() => alert(`Invoice: ${pay.id}`)}
                                 className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                              >
                                 ইনভয়েস
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-3">
               <div className="text-sm text-gray-500">
                  পৃষ্ঠা {currentPage} এর {currentPayments.length} আইটেম (মোট {allPayments.length})
               </div>
               <div className="flex items-center gap-2">
                  <button
                     onClick={handlePrevPage}
                     disabled={currentPage === 1}
                     className={`px-3 py-1 rounded-md border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                  >
                     পূর্ববর্তী
                  </button>
                  <div className="flex items-center gap-1">
                     {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                           key={page}
                           onClick={() => setCurrentPage(page)}
                           className={`w-8 h-8 rounded-md ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-white border hover:bg-gray-50'}`}
                        >
                           {page}
                        </button>
                     ))}
                  </div>
                  <button
                     onClick={handleNextPage}
                     disabled={currentPage === totalPages}
                     className={`px-3 py-1 rounded-md border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                  >
                     পরবর্তী
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default UserDashboard;