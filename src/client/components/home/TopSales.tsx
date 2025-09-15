import { useGetProductsQuery } from "@/redux/product/Product.api";
import { FiAward } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router";

function TopSales() {

   const { data: products } = useGetProductsQuery(undefined)
   const topSalesProducts = products?.data?.filter((item) =>
      item.tags?.includes("TOP_SALES")
   );

   return (
      <>
         
         <div className="w-full  lg:w-5/6  mx-auto mt-16  px-1 md:px-4 py-8 bg-[#FFE3F5] p-4">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-8">
               <h3 className=" text-[20px] sm:text-3xl font-bold text-gray-800">Top Sales</h3>
               <button className="text-pink-600 hover:text-pink-700 font-medium flex items-center">
                  View All
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
               </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 ">
               {topSalesProducts?.map((item) => (
                  <Link to={`/detlis/${item._id}`}>
                     <div key={item.id} className=" rounded-t-[5px] overflow-hidden transition-shadow duration-300 group">
                        {/* Product Image with Badges */}
                        <div className="relative">
                           <img
                              className="w-full h-44 md:h-72 object-cover group-hover:opacity-90 transition-opacity"
                              src={item.imageUrl || "https://i.ibb.co/V0Lxg87n/Add-a-subheading-1.png"}
                              alt={item.name || "Product Image"}
                           />

                           {/* Discount Badge */}
                           <span className="absolute top-3 left-3 bg-pink-600 text-white text-[8px] md:text-xs font-bold px-3 py-1 rounded-full">
                              -{item.discount}% OFF
                           </span>

                           {/* Wishlist */}
                           <button
                              aria-label="Add to Wishlist"
                              className="absolute top-3 right-3 text-gray-400 hover:text-pink-600 hover:scale-110 transition-all duration-200"
                           >
                              <MdFavoriteBorder className="text-2xl  text-pink-600" />
                           </button>



                           <button
                              aria-label="Top Sale Badge"
                              className="absolute bottom-1 left-3 px-2 py-1 md:px-3 md:py-2 bg-pink-600 text-white rounded-md shadow-md flex items-center gap-2 hover:bg-pink-700 transition-all duration-200"
                           >
                              <FiAward className="text-[12px] md:text-xl" />
                              <div className="leading-tight">
                                 <p className="text-[10px] md:text-xs font-semibold">Top</p>
                                 <p className="text-[10px] md:text-xs font-semibold">Sale</p>
                              </div>
                           </button>

                        </div>

                        {/* Product Info */}
                        <div className="p-5">
                           <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 truncate">
                              {item.product_name || "Lava Humidifier"}
                           </h3>

                           {/* Rating Stars */}
                           <div className="flex items-center mb-3">
                              <div className="flex text-yellow-400">
                                 {[...Array(5)].map((_, i) => (
                                    <svg
                                       key={i}
                                       className={`w-4 h-4 ${i < Math.floor(item.rating || 0)
                                          ? "fill-current"
                                          : "stroke-current fill-transparent"
                                          }`}
                                       viewBox="0 0 24 24"
                                    >
                                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                 ))}
                              </div>
                              <span className="text-gray-500 text-xs ml-1">({item.reviews || 0})</span>
                           </div>

                           {/* Price */}
                           <div className="flex items-center justify-between flex-wrap">
                              <div>
                                 <span className="text-sm sm:text-xl font-bold text-pink-600">৳{item.price || 2780}</span>
                                 <span className="text-sm text-gray-500 line-through ml-2">৳{item.originalPrice || 3085}</span>
                              </div>
                              <span className="text-[12px] sm:text-xs text-gray-500">{item.sold || 3} sold</span>
                           </div>


                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </>

   );
}

export default TopSales;






// const products = [
//    {
//       id: 1,
//       name: 'Lava Humidifier',
//       price: 2780,
//       originalPrice: 3080,
//       discount: 300,
//       rating: 0,
//       reviews: 0,
//       sold: 3,
//       imageUrl: 'https://i.ibb.co/V0Lxg87n/Add-a-subheading-1.png'
//    },
//    {
//       id: 2,
//       name: 'PLEXTONE EX2 ULTRA Magnetic Radiator',
//       price: 1690,
//       originalPrice: 1790,
//       discount: 100,
//       rating: 0,
//       reviews: 0,
//       sold: 10,
//       imageUrl: 'https://i.ibb.co/BHDNbKBP/images.jpg'
//    },
//    {
//       id: 3,
//       name: 'T800 Ultra Smartwatch',
//       price: 1150,
//       originalPrice: 1350,
//       discount: 200,
//       rating: 0,
//       reviews: 0,
//       sold: 7,
//       imageUrl: 'https://i.ibb.co/XxCqtCTs/download-4.jpg'
//    },
//    {
//       id: 4,
//       name: 'HOCO GM26 Phone Cooling Fan',
//       price: 1120,
//       originalPrice: 1280,
//       discount: 160,
//       rating: 0,
//       reviews: 0,
//       sold: 16,
//       imageUrl: 'https://i.ibb.co/0j1KV5zn/download-1.jpg'
//    }
// ];
