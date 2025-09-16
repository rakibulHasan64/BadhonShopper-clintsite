/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useGetProductByIDQuery } from "@/redux/product/Product.api";
// import { useState } from "react";
// import { useNavigate, useParams } from "react-router";

// const Detlis = () => {

   
//    const { id } = useParams();
//    console.log("detlis page id", id);
   
//    const { data: products, isLoading, error } = useGetProductByIDQuery(id!);

   
   
//    const navget = useNavigate();
//    const [image, setImage] = useState("https://i.ibb.co/V0Lxg87n/Add-a-subheading-1.png");

//    if (isLoading) return <p className="text-center py-10">Loading...</p>;
//    if (error) return <p className="text-center py-10">Error fetching product</p>;

   

//    return (
//       <div className=" w-full md:max-w-7xl mx-auto p-2 md:p-6">
//          <div className="flex flex-col md:flex-row gap-6">
//             {/* Left: Image Section */}
//             <div className="flex-1">
//                <div className="border rounded overflow-hidden">
//                   <img
//                      src={image}
//                      alt="Main"
//                      className="w-full object-cover"
//                   />
//                </div>
//                <div className="flex gap-2 mt-4 overflow-x-auto">
//                   <div className="flex gap-2 mt-4 overflow-x-auto">
//                      {products?.data?.map((product, i) => (
//                         <div
//                            key={product.id}
//                            className={`w-16 h-16 border ${i === 0 ? 'border-red-500' : 'border-gray-300'} rounded overflow-hidden`}
//                         >
//                            <img
//                               onClick={() => setImage(product.imageUrl)}
//                               src={product.imageUrl}
//                               alt={product.name}
//                               className="w-full h-full object-cover"
//                            />
//                         </div>
//                      ))}
//                   </div>

//                </div>
//             </div>

//             {/* Right: Product Info Section */}
//             <div className="flex-1 space-y-4">
//                <h1 className="text-xl font-semibold">
//                   1 pcs Waist Hanging Rope Keychain Outdoor Emergency Survival Tools Buckle Hook Camping Tactical Paracord
//                </h1>
//                <p className="text-lg font-bold text-red-500">৳ 180 <span className="line-through text-gray-400 text-sm">৳ 299</span> -119৳</p>
//                <div className="text-sm text-yellow-500">★ 0/5 (0) • 0 Sold</div>

//                <div className="text-sm font-semibold mt-2">Available variant:</div>
//                <div className="flex gap-2">
//                   {['Black', 'Chocolate', 'Gray'].map((color) => (
//                      <div
//                         key={color}
//                         className="border border-gray-400 px-2 py-1 text-sm rounded cursor-pointer"
//                      >
//                         {color}
//                      </div>
//                   ))}
//                </div>

//                <div className="text-green-600 text-sm">In Stock</div>
//                <div className="text-sm text-gray-500">Delivery time: 3-4 Days</div>

//                {/* Quantity Selector */}
//                <div className="flex items-center gap-2">
//                   <span className="text-sm font-medium">Quantity</span>
//                   <div className="flex items-center border rounded">
//                      <button className="px-2 py-1">-</button>
//                      <span className="px-3">1</span>
//                      <button className="px-2 py-1">+</button>
//                   </div>
//                </div>

//                {/* Coupon */}
//                <div className="bg-green-100 p-2 rounded text-sm text-green-800">
//                   300 টাকার মতি অর্ডারে ফ্রি ডেলিভারি <br />
//                   এবং মাত্র ২০ টাকা ডিসকাউন্ট কুপন
//                   <div className="mt-2">
//                      <span className="bg-white px-2 py-1 border rounded">Eid20</span>
//                      <button className="ml-2 text-blue-500">Copy</button>
//                   </div>
//                </div>

//                {/* Discount Coupon Input */}
//                <div className="flex gap-2 mt-2">
//                   <input
//                      type="text"
//                      placeholder="Enter code"
//                      className="border px-2 py-1 rounded w-full"
//                   />
//                </div>

//                {/* Buttons */}
//                <div className="flex gap-4 mt-4">
//                   <button onClick={()=> navget("/checkOut")} className="bg-green-500 text-white px-4 py-2 rounded">
//                      Buy Now
//                   </button>
//                   <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded">
//                      Add to Cart
//                   </button>
//                </div>

//                {/* Description */}
//                <div className="mt-6">
//                   <h2 className="font-semibold text-lg md:text-2xl mb-1">Description</h2>
//                   <p className="text-sm md:text-lg text-gray-700">
//                      Material: 9-core umbrella rope, metal hook <br />
//                      Color: black, army green, khaki, forest, desert <br />
//                      Length: 10 inches after undoing,
//                   </p>
//                   <p className="mt-2 text-sm">
//                      <strong>Warranty:</strong> 7 Days <br />
//                      <strong>Return Policy:</strong> Damages Products Cannot be Taken
//                   </p>
//                   <p className="text-sm text-blue-500 mt-2">
//                      Visit our Facebook group <a href="#" className="underline">Badhon's World Family</a>
//                   </p>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default Detlis;

import { useGetProductByIDQuery } from "@/redux/product/Product.api";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const Detlis = () => {
   const { id } = useParams();
   const { data, isLoading, error } = useGetProductByIDQuery(id!);

   const product = data?.data;
   const navget = useNavigate();

   // Default image thumbnail থেকে
   const [image, setImage] = useState(product?.thumbnail);

   if (isLoading) return <p className="text-center py-10">Loading...</p>;
   if (error) return <p className="text-center py-10">Error fetching product</p>;

   return (
      <div className="w-full md:max-w-7xl mx-auto p-2 md:p-6">
         <div className="flex flex-col md:flex-row gap-6">
            {/* Left: Image Section */}
            <div className="flex-1">
               <div className="border rounded overflow-hidden">
                  <img
                     src={image || product?.thumbnail}
                     alt={product?.product_name}
                     className="w-full object-cover"
                  />
               </div>
               <div className="flex gap-2 mt-4 overflow-x-auto">
                  {product?.product_slider_images?.map((img: string, i: number) => (
                     <div
                        key={i}
                        className={`w-16 h-16 border ${i === 0 ? "border-red-500" : "border-gray-300"
                           } rounded overflow-hidden`}
                     >
                        <img
                           onClick={() => setImage(img)}
                           src={img || "https://i.ibb.co/20C4hwD0/bf88110a43d1887ec561eb082d8e541c-jpg-720x720q80.jpg"}
                           alt={`slide-${i}`}
                           className="w-full h-full object-cover cursor-pointer"
                        />
                     </div>
                  ))}
               </div>
            </div>

            {/* Right: Product Info Section */}
            <div className="flex-1 space-y-4">
               <h1 className="text-xl font-semibold">{product?.product_name}</h1>

               <p className="text-lg font-bold text-red-500">
                  ৳ {product?.seller_price}{" "}
                  <span className="line-through text-gray-400 text-sm">
                     ৳ {product?.price}
                  </span>{" "}
                  -{product?.discount}৳
               </p>

               <div className="text-sm text-yellow-500">
                  ★ {product?.total_rating}/5 • {product?.total_sold} Sold
               </div>

               <div className="text-sm font-semibold mt-2">Available variant:</div>
               <div className="flex gap-2">
               
                  {product?.colors?.map((c: any) => (
                     <div
                        key={c._id}
                        className={`border px-2 py-1 text-sm rounded cursor-pointer ${c.available_quantity === 0
                              ? "border-gray-300 text-gray-400"
                              : "border-gray-400"
                           }`}
                     >
                        {c.color}
                     </div>
                  ))}
               </div>

               <div className="text-green-600 text-sm">
                  {product?.available_quantity > 0 ? "In Stock" : "Out of Stock"}
               </div>
               <div className="text-sm text-gray-500">
                  Delivery time: {product?.delivery_time}
               </div>

               {/* Quantity Selector */}
               <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Quantity</span>
                  <div className="flex items-center border rounded">
                     <button className="px-2 py-1">-</button>
                     <span className="px-3">1</span>
                     <button className="px-2 py-1">+</button>
                  </div>
               </div>

               {/* Coupon */}
               <div className="bg-green-100 p-2 rounded text-sm text-green-800">
                  300 টাকার মতি অর্ডারে ফ্রি ডেলিভারি <br />
                  এবং মাত্র ২০ টাকা ডিসকাউন্ট কুপন
                  <div className="mt-2">
                     <span className="bg-white px-2 py-1 border rounded">Eid20</span>
                     <button className="ml-2 text-blue-500">Copy</button>
                  </div>
               </div>

               {/* Discount Coupon Input */}
               <div className="flex gap-2 mt-2">
                  <input
                     type="text"
                     placeholder="Enter code"
                     className="border px-2 py-1 rounded w-full"
                  />
               </div>

               {/* Buttons */}
               <div className="flex gap-4 mt-4">
                  <button
                     onClick={() => navget("/checkOut")}
                     className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                     Buy Now
                  </button>
                  <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded">
                     Add to Cart
                  </button>
               </div>

               {/* Description */}
               <div className="mt-6">
                  <h2 className="font-semibold text-lg md:text-2xl mb-1">
                     Description
                  </h2>
                  <div
                     className="text-sm md:text-lg text-gray-700"
                     dangerouslySetInnerHTML={{ __html: product?.description }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Detlis;
