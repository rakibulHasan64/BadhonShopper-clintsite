/* eslint-disable @typescript-eslint/no-explicit-any */
// components/home/ScrollAd.jsx

import { useGetCategoriesQuery } from "@/redux/datacatagory/Catagory.api";
import { useNavigate } from "react-router";

// const categories = [
//    { name: "Gaming", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Mouse", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Watch", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Power Bank", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Airpods", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Keyboard", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Fan", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Mouse Pad", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Clock", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Lamp", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Speaker", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
//    { name: "Tripod", image: "https://i.ibb.co/sJq56tjx/download-5.jpg" },
// ];

export default function ScrollAd() {


   const { data, isLoading } = useGetCategoriesQuery(undefined);
      const navigate = useNavigate();
      if (isLoading) return <p>Loading...</p>;
   
      const categories = data?.data || [];
   
   
      const handleCategoryClick = (category: any) => {
         // navigate(`/shop?categoryId=${category._id}`);
         navigate(`/shop?categoryId=${category._id}&categoryName=${encodeURIComponent(category.name)}`);
   
   
      };
   return (
      <div className="fixed bottom-0 w-full bg-white shadow-xl rounded-t-2xl p-4 z-50  ">
         <h3 className="text-center text-lg font-semibold text-gray-800 mb-4">
            আপনার পছন্দের প্রোডাক্ট খুঁজে পেতে ক্যাটাগরি সিলেক্ট করুন!
         </h3>

         <div className="grid grid-cols-4 gap-4 px-2">
            {categories.map((cat, index) => (
               <div key={index} className="flex flex-col items-center text-center text-sm text-gray-700 hover:text-pink-600 cursor-pointer">
                  <img src={cat.common_image || "https://i.ibb.co/sJq56tjx/download-5.jpg"} onClick={() => handleCategoryClick(cat)} alt={cat.name} className="w-12 h-12 object-contain mb-1" />
                  <span>{cat.name}</span>
               </div>
            ))}
         </div>
      </div>
   );
}
