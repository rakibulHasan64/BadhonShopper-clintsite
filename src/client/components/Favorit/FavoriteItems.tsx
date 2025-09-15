import { FiAward } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";

function FavoriteItems() {
   const products = [
      {
         id: 1,
         name: 'Lava Humidifier',
         price: 2780,
         originalPrice: 3080,
         discount: 300,
         rating: 0,
         reviews: 0,
         sold: 3,
         imageUrl: 'https://i.ibb.co/PGCYfqjZ/download.jpg'
      },
      {
         id: 2,
         name: 'PLEXTONE EX2 ULTRA Magnetic Radiator',
         price: 1690,
         originalPrice: 1790,
         discount: 100,
         rating: 0,
         reviews: 0,
         sold: 10,
         imageUrl: 'https://i.ibb.co/N6btq3MJ/images.jpg'
      },
   ];

   return (
      <div className="w-full md:w-5/6 mx-auto px-1 md:px-4 h-screen">
         <h2 className="text-[20px] md:text-3xl py-4">Your Favorite Items {products.length}</h2>

         {products.length === 0 ? (
            <div className="text-center py-10">
               <p className="text-gray-500 text-lg">No favorite items found.</p>
            </div>
         ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
               {products.map((item) => (
                  <div key={item.id} className="rounded-t-[5px] overflow-hidden transition-shadow duration-300 group">
                     <div className="relative">
                        <img
                           className="w-full h-44 md:h-59 lg:h-72 object-cover group-hover:opacity-90 transition-opacity"
                           src={item.imageUrl}
                           alt={item.name || "Product Image"}
                        />
                        <span className="absolute top-3 left-3 bg-pink-600 text-white text-[8px] md:text-xs font-bold px-3 py-1 rounded-full">
                           -{item.discount}% OFF
                        </span>
                        <button
                           aria-label="Add to Wishlist"
                           className="absolute top-3 right-3 text-gray-400 hover:text-pink-600 hover:scale-110 transition-all duration-200"
                        >
                           <MdFavoriteBorder className="text-2xl text-pink-600" />
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

                     <div className="p-5">
                        <h3 className="text-sm sm:text-lg font-semibold text-gray-800 mb-2 truncate">
                           {item.name}
                        </h3>

                        <div className="flex items-center mb-3">
                           <div className="flex items-center text-yellow-400">
                              <span className="text-sm sm:text-xl font-bold text-pink-600">৳{item.price}</span>
                              <span className="text-sm text-gray-500 line-through ml-2">৳{item.originalPrice}</span>
                           </div>
                           <span className="text-gray-500 text-xs ml-1">({item.reviews})</span>
                        </div>

                        <div className="flex items-center justify-between flex-wrap">
                           <div className="flex items-center flex-wrap gap-2 text-sm text-gray-700">
                              <span className="text-yellow-400">⭐</span>
                              <p className="text-xs sm:text-sm">0/5 ({item.reviews})</p>
                              <span className="text-[12px] sm:text-xs text-gray-500">| {item.sold} sold</span>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}

export default FavoriteItems;
