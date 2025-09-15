import { useGetProductsQuery } from "@/redux/product/Product.api";
import { FiAward } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router";


function AllOffers() {

   const { data: products } = useGetProductsQuery(undefined)
      const topSalesProducts = products?.data?.filter((item) =>
         item.tags?.includes("BAST_OFER")
      );
   return (
      <>

         <div className="w-full  md:w-5/6  mx-auto px-1 md:px-4  ">
            <h2 className="text-[20px] md:text-3xl py-4">Best Discount for You</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 ">

               {topSalesProducts?.map((item) => (
                  <Link to={`/detlis/${item._id}`}>
                     <div key={item.id} className=" rounded-t-[5px] overflow-hidden transition-shadow duration-300 group">
                        {/* Product Image with Badges */}
                        <div className="relative">
                           <img
                              className="w-full h-44 md:h-59 lg:h-72 object-cover group-hover:opacity-90 transition-opacity"
                              src={item.imageUrl || "https://i.ibb.co/0j1KV5zn/download-1.jpg"}
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
                              {item.name || "Lava Humidifier"}
                           </h3>

                           {/* Rating Stars */}
                           <div className="flex items-center mb-3">
                              <div className="flex items-center text-yellow-400">
                                 <span className="text-sm sm:text-xl font-bold text-pink-600">৳{item.price || 2780}</span>
                                 <span className="text-sm text-gray-500 line-through ml-2">৳{item.originalPrice || 3085}</span>
                              </div>
                              <span className="text-gray-500 text-xs ml-1">({item.reviews || 0})</span>
                           </div>

                           {/* Price */}
                           <div className="flex items-center justify-between flex-wrap">
                              <div className="flex items-center flex-wrap gap-2 text-sm text-gray-700">
                                 <span className="text-yellow-400">⭐</span>
                                 <p className="text-xs sm:text-sm">0/5 (0)</p>
                                 <span className="text-[12px] sm:text-xs text-gray-500">| {item.sold || 3} sold</span>
                              </div>

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

export default AllOffers;