/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdCategory, MdChevronRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import { useGetCategoriesQuery } from "@/redux/datacatagory/Catagory.api";
import { useNavigate } from "react-router";


function Banner() {
   const { data, isLoading } = useGetCategoriesQuery(undefined);
   const navigate = useNavigate();





   const categories = data?.data || [];

   if (isLoading)
      return (
         <div className="w-full lg:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Sidebar Skeleton */}
            <div className="hidden lg:block col-span-1 h-[450px] bg-gray-100 rounded-t-2xl animate-pulse" />

            {/* Banner Slider Skeleton */}
            <div className="col-span-1 lg:col-span-4 h-[420px] bg-gray-200 rounded-t-2xl animate-pulse" />

            {/* Mobile Skeleton */}
            <div className="lg:hidden col-span-4 mt-6 flex space-x-2 overflow-x-auto">
               {[...Array(5)].map((_, i) => (
                  <div
                     key={i}
                     className="w-16 h-16 bg-gray-300 rounded animate-pulse flex-shrink-0"
                  />
               ))}
            </div>
         </div>
      );


   const handleCategoryClick = (category: any) => {
      // navigate(`/shop?categoryId=${category._id}`);
      navigate(`/shop?categoryId=${category._id}&categoryName=${encodeURIComponent(category.name)}`);


   };

   return (
      <div className="w-full lg:w-5/6 mx-auto lg:mt-10 sm:p-0">
         <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Sidebar for large devices */}
            <div className="hidden lg:block col-span-1 h-[450px] bg-white shadow rounded-t-2xl overflow-auto scrollbar-hide">
               <div className="bg-[#ff0066] py-4 px-3.5 sticky top-0 z-10 text-white flex items-center gap-2 rounded-t-2xl">
                  <MdCategory className="text-2xl" />
                  <h3 className="text-lg font-semibold">All Categories</h3>
               </div>
               <ul className="divide-y">

                  {/* catagory image  */}
                  {categories?.map((cat: any, index: number) => (
                     <li
                        key={index}
                        onClick={() => handleCategoryClick(cat)}
                        className="group flex items-center justify-between px-4 py-3 mt-3 hover:bg-gray-100 cursor-pointer"
                     >
                        <div className="flex items-center gap-3">
                           <img
                              src={cat.slider_image || "https://i.ibb.co/PGCYfqjZ/download.jpg"}
                              alt={cat.name}
                              className="w-10 h-10 object-cover rounded"
                           />
                           <span className="text-lg font-medium text-gray-700 group-hover:text-[#ff0066]">
                              {cat.name}
                           </span>
                        </div>
                        <MdChevronRight className="text-gray-400 text-xl group-hover:text-[#ff0066]" />
                     </li>
                  ))}
               </ul>
            </div>

            {/* Banner Slider */}
            <div className="col-span-1 lg:col-span-4">
               <Swiper
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Pagination, Autoplay]}
                  className="lg:rounded-2xl overflow-hidden w-full"
               >
                  {categories
                     ?.filter((cat: any) => cat.common_image) 
                     .map((cat: any) => (
                        <SwiperSlide key={cat._id}>
                           <img
                              src={cat.common_image}
                              alt={cat.name}
                              className="w-full h-full md:h-[350px] lg:h-[420px] object-cover"
                              onClick={() => handleCategoryClick(cat)}
                           />
                        </SwiperSlide>
                     ))}

               </Swiper>

               {/* Mobile Category Slider */}
               <div className="lg:hidden mt-6">
                  <Swiper
                     spaceBetween={10}
                     freeMode={true}
                     breakpoints={{
                        0: { slidesPerView: 3 },
                        640: { slidesPerView: 5 },
                        768: { slidesPerView: 6 },
                     }}
                  >
                     {categories.map((cat: any) => (
                        <SwiperSlide
                           key={cat.id}
                           className="flex flex-col items-center gap-2 text-sm text-gray-700 hover:text-pink-600 px-2"
                        >
                           <div className="rounded bg-gray-100 flex items-center justify-center overflow-hidden w-16 h-16">
                              <img
                                 src={cat.slider_image || "https://i.ibb.co/PGCYfqjZ/download.jpg"}
                                 onClick={() => handleCategoryClick(cat)}
                                 alt={cat.name}
                                 className="w-full h-full object-cover"
                              />
                           </div>
                           <span className="text-center block mt-2 text-sm md:text-md font-medium">
                              {cat.name}
                           </span>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Banner;
