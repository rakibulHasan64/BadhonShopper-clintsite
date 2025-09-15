/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react';
// import { FiAward, FiSearch } from 'react-icons/fi';
// import { BsFilter } from "react-icons/bs";
// import { MdFavoriteBorder, MdClose } from 'react-icons/md';
// import { useGetProductsQuery } from "@/redux/product/Product.api";
// function Shops() {
//    const [sortOption, setSortOption] = useState('All');
//    const [priceRange, setPriceRange] = useState([0, 5000]);
//    const [searchQuery, setSearchQuery] = useState('');
//    const [showFilterModal, setShowFilterModal] = useState(false);



//    const { data } = useGetProductsQuery(undefined)
//    console.log("backend data...........", data);
   
   

//    const handlePriceChange = (e) => {
//       const newValue = Number(e.target.value);
//       setPriceRange([priceRange[0], newValue]);
//    };

//    const products = [
//       { id: 1, name: 'Lava Humidifier', price: 2780, originalPrice: 3080, discount: 10, sold: 3, imageUrl: 'https://i.ibb.co/PGCYfqjZ/download.jpg' },
//       { id: 2, name: 'PLEXTONE EX2 ULTRA Magnetic Radiator', price: 1690, originalPrice: 1790, discount: 6, sold: 10, imageUrl: 'https://i.ibb.co/N6btq3MJ/images.jpg' },
//       { id: 3, name: 'T800 Ultra Smartwatch', price: 1150, originalPrice: 1350, discount: 15, sold: 7, imageUrl: 'https://i.ibb.co/35F4YMMN/download-3.jpg' },
//       { id: 4, name: 'HOCO GM26 Phone Cooling Fan', price: 1120, originalPrice: 1280, discount: 13, sold: 16, imageUrl: 'https://i.ibb.co/99VMKT92/seven-1.png' },
//    ];

//    const filteredProducts = products.filter(product =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       && product.price <= priceRange[1] // Filter by max price
//    );

//    return (
//       <div className=" w-full md:w-5/6  mx-auto dark:bg-gray-900 transition-colors duration-300 p-1 md:p-4">
//          <div className="lg:hidden w-full sm:w-1/2 md:w-1/2 relative mt-3 md:mt-3 mb-2">
//             <input
//                type="text"
//                placeholder="Search product..."
//                className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 "
//                value={searchQuery}
//                onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <FiSearch className="absolute right-3 top-3 text-gray-400" />
//          </div>
//          {/* Header */}
//          <div className="flex items-center justify-between bg-white dark:bg-gray-800 py-4 px-4 rounded-md  mb-6">
//             <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Shop products</h1>

//             {/* Desktop Search */}
//             <div className="hidden lg:block w-1/3 relative">
//                <input
//                   type="text"
//                   placeholder="Search product..."
//                   className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                />
//                <FiSearch className="absolute right-3 top-3 text-gray-400" />
//             </div>

//             {/* Mobile Filter Button */}
//             <button
//                className="lg:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-700"
//                onClick={() => setShowFilterModal(true)}
//                aria-label="Open filters"
//             >
//                <BsFilter className="text-gray-600 dark:text-gray-300" size={20} />
//             </button>
//          </div>

//          {/* Mobile Filter Modal */}
//          {showFilterModal && (
//             <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
//                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative overflow-auto max-h-[90vh]">
//                   <button
//                      className="absolute top-3 right-3 text-gray-600 dark:text-gray-300"
//                      onClick={() => setShowFilterModal(false)}
//                      aria-label="Close filters"
//                   >
//                      <MdClose size={24} />
//                   </button>

//                   <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Filter Options</h2>

//                   {/* Sort By */}
//                   <div className="mb-6">
//                      <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Sort by</h3>
//                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
//                         {['All', 'Low to high', 'High to low', 'Best selling'].map((option) => (
//                            <label key={option} className="flex items-center cursor-pointer">
//                               <input
//                                  type="radio"
//                                  name="sort"
//                                  value={option}
//                                  checked={sortOption === option}
//                                  onChange={(e) => setSortOption(e.target.value)}
//                                  className="mr-2 accent-pink-600"
//                               />
//                               <span>{option}</span>
//                            </label>
//                         ))}
//                      </div>
//                   </div>

//                   {/* Price Range */}
//                   <div className="mb-6">
//                      <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Price</h3>
//                      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-1">
//                         <span>৳{priceRange[0]}</span>
//                         <span>৳{priceRange[1]}</span>
//                      </div>
//                      <input
//                         type="range"
//                         min="0"
//                         max="5000"
//                         value={priceRange[1]}
//                         onChange={handlePriceChange}
//                         className="w-full"
//                      />
//                   </div>

//                   {/* Offers (Checkboxes) */}
//                   <div className="border-t pt-4">
//                      <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Offers</h3>
//                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
//                         <label className="flex items-center cursor-pointer">
//                            <input type="checkbox" className="mr-2 text-pink-600" />
//                            <span>Best price</span>
//                         </label>
//                         <label className="flex items-center cursor-pointer">
//                            <input type="checkbox" className="mr-2 text-pink-600" />
//                            <span>Discount</span>
//                         </label>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          )}

//          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             {/* Sidebar filters for desktop */}
//             <aside className="hidden lg:block lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm sticky top-20 self-start">
//                {/* Sort By */}
//                <div className="mb-6">
//                   <h3 className="text-2xl font-medium mb-4 text-gray-800 dark:text-gray-100">Sort by</h3>
//                   <div className="space-y-3 text-gray-800 dark:text-gray-300 text-lg">
//                      {['All', 'Low to high', 'High to low', 'Best selling'].map((option) => (
//                         <label key={option} className="flex items-center cursor-pointer">
//                            <input
//                               type="radio"
//                               name="sort-desktop"
//                               value={option}
//                               checked={sortOption === option}
//                               onChange={(e) => setSortOption(e.target.value)}
//                               className="mr-3 accent-pink-600"
//                            />
//                            <span>{option}</span>
//                         </label>
//                      ))}
//                   </div>
//                </div>

//                {/* Price Range */}
//                <div className="mb-6">
//                   <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-100">Price</h3>
//                   <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-2">
//                      <span>৳{priceRange[0]}</span>
//                      <span>৳{priceRange[1]}</span>
//                   </div>
//                   <input
//                      type="range"
//                      min="0"
//                      max="5000"
//                      value={priceRange[1]}
//                      onChange={handlePriceChange}
//                      className="w-full"
//                   />
//                </div>

//                {/* Offers */}
//                <div className="border-t pt-4">
//                   <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-100">Offers</h3>
//                   <div className="space-y-3 text-gray-800 dark:text-gray-300 text-lg">
//                      <label className="flex items-center cursor-pointer">
//                         <input type="checkbox" className="mr-3 text-pink-600" />
//                         <span>Best price</span>
//                      </label>
//                      <label className="flex items-center cursor-pointer">
//                         <input type="checkbox" className="mr-3 text-pink-600" />
//                         <span>Discount</span>
//                      </label>
//                   </div>
//                </div>
//             </aside>

//             {/* Product Grid */}
//             <section className="w-full lg:col-span-9">
//                {filteredProducts.length === 0 ? (
//                   <div className="text-center py-10">
//                      <p className="text-xl text-gray-600 dark:text-gray-300">
//                         No products found.
//                      </p>
//                   </div>
//                ) : (
//                   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//                      {filteredProducts.map((item) => (
//                         <div key={item.id} className=" rounded-t-[5px] overflow-hidden transition-shadow duration-300 group">
//                            {/* Product Image with Badges */}
//                            <div className="relative">
//                               <img
//                                  className="w-full h-44 md:h-59 lg:h-72 object-cover group-hover:opacity-90 transition-opacity"
//                                  src={item.imageUrl}
//                                  alt={item.name || "Product Image"}
//                               />

//                               {/* Discount Badge */}
//                               <span className="absolute top-3 left-3 bg-pink-600 text-white text-[8px] md:text-xs font-bold px-3 py-1 rounded-full">
//                                  -{item.discount}% OFF
//                               </span>

//                               {/* Wishlist */}
//                               <button
//                                  aria-label="Add to Wishlist"
//                                  className="absolute top-3 right-3 text-gray-400 hover:text-pink-600 hover:scale-110 transition-all duration-200"
//                               >
//                                  <MdFavoriteBorder className="text-2xl  text-pink-600" />
//                               </button>



//                               <button
//                                  aria-label="Top Sale Badge"
//                                  className="absolute bottom-1 left-3 px-2 py-1 md:px-3 md:py-2 bg-pink-600 text-white rounded-md shadow-md flex items-center gap-2 hover:bg-pink-700 transition-all duration-200"
//                               >
//                                  <FiAward className="text-[12px] md:text-xl" />
//                                  <div className="leading-tight">
//                                     <p className="text-[10px] md:text-xs font-semibold">Top</p>
//                                     <p className="text-[10px] md:text-xs font-semibold">Sale</p>
//                                  </div>
//                               </button>


//                            </div>

//                            {/* Product Info */}
//                            <div className="p-5">
//                               <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 truncate">
//                                  {item.name || "Lava Humidifier"}
//                               </h3>

//                               {/* Rating Stars */}
//                               <div className="flex items-center mb-3">
//                                  <div className="flex items-center text-yellow-400">
//                                     <span className="text-sm sm:text-xl font-bold text-pink-600">৳{item.price || 2780}</span>
//                                     <span className="text-sm text-gray-500 line-through ml-2">৳{item.originalPrice || 3085}</span>
//                                  </div>
                                 
//                               </div>

//                               {/* Price */}
//                               <div className="flex items-center justify-between flex-wrap">
//                                  <div className="flex items-center flex-wrap gap-2 text-sm text-gray-700">
//                                     <span className="text-yellow-400">⭐</span>
//                                     <p className="text-xs sm:text-sm">0/5 (0)</p>
//                                     <span className="text-[12px] sm:text-xs text-gray-500">| {item.sold || 3} sold</span>
//                                  </div>

//                               </div>


//                            </div>
//                         </div>
//                      ))}
//                   </div>
//                )}
//             </section>
//          </div>
//       </div>
//    );
// }

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiAward } from 'react-icons/fi';
import { BsFilter } from "react-icons/bs";
import { MdFavoriteBorder, MdClose } from 'react-icons/md';
import { useGetProductsQuery } from "@/redux/product/Product.api";

// Helper: URL query params
function useQuery() {
   return new URLSearchParams(useLocation().search);
}

function Shops() {
   const query = useQuery();
   const categoryId = query.get('categoryId');
   const categoryName = query.get('categoryName');

   const [sortOption, setSortOption] = useState('All');
   const [priceRange, setPriceRange] = useState([0, 5000]);
   const [searchQuery, setSearchQuery] = useState('');
   const [showFilterModal, setShowFilterModal] = useState(false);

   // Backend fetch
   const { data, isLoading } = useGetProductsQuery({
      search: searchQuery,
      maxPrice: priceRange[1],
      sort: sortOption,
      categoryId: categoryId || undefined,
   });

   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setPriceRange([priceRange[0], newValue]);
   };

   if (isLoading) return <p className="text-center py-10">Loading...</p>;

   const products = data?.data || [];

   return (
      <div className="w-full md:w-5/6 mx-auto dark:bg-gray-900 transition-colors duration-300 p-4">
         {/* Header */}
         <div className="flex items-center justify-between bg-white dark:bg-gray-800 py-4 px-4 rounded-md mb-6">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
               {categoryName ? `Shop: ${categoryName}` : "Shop Products"}
            </h1>

            {/* Desktop Search */}
            <div className="hidden lg:block w-1/3 relative">
               <input
                  type="text"
                  placeholder="Search product..."
                  className="w-full py-2 px-4 pr-10 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
               <FiSearch className="absolute right-3 top-3 text-gray-400" />
            </div>

            {/* Mobile Filter Button */}
            <button
               className="lg:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-700"
               onClick={() => setShowFilterModal(true)}
            >
               <BsFilter className="text-gray-600 dark:text-gray-300" size={20} />
            </button>
         </div>

         {/* Mobile Filter Modal */}
         {showFilterModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
               <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative overflow-auto max-h-[90vh]">
                  <button
                     className="absolute top-3 right-3 text-gray-600 dark:text-gray-300"
                     onClick={() => setShowFilterModal(false)}
                  >
                     <MdClose size={24} />
                  </button>

                  <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Filter Options</h2>

                  {/* Sort */}
                  <div className="mb-6">
                     <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Sort by</h3>
                     <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        {['All', 'Low to high', 'High to low', 'Best selling'].map((option) => (
                           <label key={option} className="flex items-center cursor-pointer">
                              <input
                                 type="radio"
                                 name="sort"
                                 value={option}
                                 checked={sortOption === option}
                                 onChange={(e) => setSortOption(e.target.value)}
                                 className="mr-2 accent-pink-600"
                              />
                              <span>{option}</span>
                           </label>
                        ))}
                     </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                     <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Price</h3>
                     <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-1">
                        <span>৳{priceRange[0]}</span>
                        <span>৳{priceRange[1]}</span>
                     </div>
                     <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full"
                     />
                  </div>
               </div>
            </div>
         )}

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm sticky top-20 self-start">
               <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-4 text-gray-800 dark:text-gray-100">Sort by</h3>
                  <div className="space-y-3 text-gray-800 dark:text-gray-300 text-lg">
                     {['All', 'Low to high', 'High to low', 'Best selling'].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer">
                           <input
                              type="radio"
                              name="sort-desktop"
                              value={option}
                              checked={sortOption === option}
                              onChange={(e) => setSortOption(e.target.value)}
                              className="mr-3 accent-pink-600"
                           />
                           <span>{option}</span>
                        </label>
                     ))}
                  </div>
               </div>

               <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-100">Price</h3>
                  <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-2">
                     <span>৳{priceRange[0]}</span>
                     <span>৳{priceRange[1]}</span>
                  </div>
                  <input
                     type="range"
                     min="0"
                     max="5000"
                     value={priceRange[1]}
                     onChange={handlePriceChange}
                     className="w-full"
                  />
               </div>
            </aside>

            {/* Product grid */}
            <section className="w-full lg:col-span-9">
               {products.length === 0 ? (
                  <div className="text-center py-10">
                     <p className="text-xl text-gray-600 dark:text-gray-300">No products found.</p>
                  </div>
               ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                     {products.map((item: any) => (
                        <Link to={`/detlis/${item._id}`}>
                           
                           <div key={item._id} className="rounded-t-[5px] overflow-hidden transition-shadow duration-300 group">
                              <div className="relative">
                                 <img
                                    className="w-full h-44 md:h-59 lg:h-72 object-cover group-hover:opacity-90 transition-opacity"
                                    src={item.imageUrl || "https://i.ibb.co/20C4hwD0/bf88110a43d1887ec561eb082d8e541c-jpg-720x720q80.jpg"}
                                    alt={item.product_name}
                                 />
                                 <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    -{item.discount}% OFF
                                 </span>
                                 <button className="absolute top-3 right-3 text-gray-400 hover:text-pink-600 hover:scale-110 transition-all duration-200">
                                    <MdFavoriteBorder className="text-2xl text-pink-600" />
                                 </button>

                                 <button className="absolute bottom-1 left-3 px-2 py-1 md:px-3 md:py-2 bg-pink-600 text-white rounded-md shadow-md flex items-center gap-2 hover:bg-pink-700 transition-all duration-200">
                                    <FiAward className="text-[12px] md:text-xl" />
                                    <div className="leading-tight">
                                       <p className="text-[10px] md:text-xs font-semibold">Top</p>
                                       <p className="text-[10px] md:text-xs font-semibold">Sale</p>
                                    </div>
                                 </button>
                              </div>
                              <div className="p-5">
                                 <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 truncate">{item.product_name}</h3>
                                 <div className="flex items-center mb-3">
                                    <div className="flex items-center text-yellow-400">
                                       <span className="text-sm sm:text-xl font-bold text-pink-600">৳{item.price}</span>
                                       <span className="text-sm text-gray-500 line-through ml-2">৳{item.originalPrice}</span>
                                    </div>
                                 </div>
                                 <div className="flex items-center justify-between flex-wrap">
                                    <div className="flex items-center flex-wrap gap-2 text-sm text-gray-700">
                                       <span className="text-yellow-400">⭐</span>
                                       <p className="text-xs sm:text-sm">0/5 (0)</p>
                                       <span className="text-[12px] sm:text-xs text-gray-500">| {item.sold} sold</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>
               )}
            </section>
         </div>
      </div>
   );
}

export default Shops;
