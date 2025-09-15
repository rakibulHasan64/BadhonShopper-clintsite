import { useState } from "react";
import { FiCheck, FiZap, FiStar,  FiClock, FiMessageSquare,  FiPhone } from "react-icons/fi";
import WhyChooseUs from "./WhyChooseUs";

function BecameSeller() {
   const [ setSelectedPackage] = useState(null);
   const [openIndex, setOpenIndex] = useState(null);

   const packages = [
      {
         id: 1,
         name: "Premium",
         price: 1500,
         duration: "1YEAR",
         popular: false,
         features: [
            "রিসেলার ড্যাসবোর্ড",
            "প্রডাক্টের HD ছবি ও ভিডিও",
            "২৪ ঘণ্টা চ্যাট সাপোর্ট",
            "ফ্রি পেইজ প্রমোশন",
            "মেমো কার্ড",
            "সুপার ফাস্ট উইথড্র (বিকাশ, নগদ)",
            "লাইভ অর্ডার ট্র্যাকিং",
            "কাস্টোমার কল কনফার্মেশন",
            "পেইজ মনিটরিং",
            "প্রতি মাসে ২টি লাইভ ক্লাস"
         ],
         icon: <FiStar className="text-yellow-400" />
      },
      {
         id: 2,
         name: "Advance Business Booster",
         price: 2000,
         duration: "2YEARS",
         popular: true,
         features: [
            "২ বছরের পেইড ওয়েবসাইট এক্সেস",
            "বিজনেস হিডেন ট্রিক্সস",
            "জিরো টু হিরো পেইজ ট্রান্সফর্মেশন",
            "প্রিমিয়াম মডারেটর সাপোর্ট",
            "সার্টিফিকেট + গিফট আইটেম",
            "পার্টনারশিপ প্রোগ্রাম",
            "এডভান্স টুলস কিট",
            "সাথে থাকছে Package 1 এর সব সুবিধাও"
         ],
         icon: <FiZap className="text-blue-500" />
      }
   ];


   const faqs = [
      {
         question: "পেমেন্ট সিস্টেম কিভাবে কাজ করে?",
         answer:
            "আপনি বিকাশ, নগদ বা ব্যাংক ট্রান্সফারের মাধ্যমে পেমেন্ট করতে পারবেন। পেমেন্ট ভেরিফাই হলে আপনার অ্যাকাউন্ট এক্টিভ হয়ে যাবে।",
      },
      {
         question: "কতদিনের মধ্যে সাপোর্ট পাবো?",
         answer:
            "আমাদের ২৪/৭ চ্যাট সাপোর্ট আছে। সাধারণত ১ ঘণ্টার মধ্যে রিপ্লাই দেয়া হয়।",
      },
      {
         question: "রিফান্ড পলিসি কি?",
         answer:
            "৭ দিনের মধ্যে যদি সেবা না পেয়ে থাকেন, সম্পূর্ণ রিফান্ড পাবেন।",
      },
   ];

   return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
         {/* Hero Section */}
         <div className="max-w-7xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
               রিসেলিং এর জন্য জয়েন করুন
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
               আপনার ব্যবসাকে নিয়ে যান নতুন উচ্চতায় আমাদের এক্সক্লুসিভ রিসেলার প্রোগ্রামের মাধ্যমে
            </p>
         </div>

         {/* Packages Section */}
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-center gap-8">
               {packages.map((pkg) => (
                  <div
                     key={pkg.id}
                     className={` relative flex-1 max-w-md mx-auto rounded-xl shadow-lg overflow-hidden ${pkg.popular ? "border-2 border-blue-500" : "border border-gray-200"}`}
                  >
                     {pkg.popular && (
                        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                           MOST POPULAR
                        </div>
                     )}

                     <div className="p-6 bg-white">
                        <div className="flex items-center mb-4">
                           {pkg.icon}
                           <h3 className="ml-2 text-2xl font-bold text-gray-900">{pkg.name}</h3>
                        </div>

                        <div className="mb-6">
                           <span className="text-4xl font-extrabold text-gray-900">৳{pkg.price}</span>
                           <span className="text-lg font-medium text-gray-500">/{pkg.duration}</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                           {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start ">
                                 <FiCheck className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" />
                                 <span className="ml-2 text-gray-700">{feature}</span>
                              </li>
                           ))}
                        </ul>

                        <button
                           onClick={() => setSelectedPackage(pkg.id)}
                           className={`w-full py-3 px-4 rounded-lg font-medium ${pkg.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
                        >
                           Get Started Now
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Features Section */}
         <WhyChooseUs />

         {/* Testimonials */}
         <div className="max-w-7xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Successful Resellers</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white p-6 rounded-lg shadow-sm">
                     <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                        <div>
                           <h4 className="font-medium text-gray-900">রিসেলার {item}</h4>
                           <div className="flex text-yellow-400">
                              <FiStar className="fill-current" />
                              <FiStar className="fill-current" />
                              <FiStar className="fill-current" />
                              <FiStar className="fill-current" />
                              <FiStar className="fill-current" />
                           </div>
                        </div>
                     </div>
                     <p className="text-gray-600">
                        "এই প্ল্যাটফর্মের মাধ্যমে আমার ব্যবসা ৩গুণ বৃদ্ধি পেয়েছে। সাপোর্ট সিস্টেম অসাধারণ!"
                     </p>
                  </div>
               ))}
            </div>
         </div>

         {/* CTA Section */}
         <div className="max-w-7xl mx-auto mt-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <div className="text-center">
               <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Business?</h2>
               <p className="text-xl mb-8 max-w-3xl mx-auto">
                  এখনই জয়েন করুন এবং আপনার ব্যবসাকে নিয়ে যান নতুন উচ্চতায়
               </p>
               <div className="flex flex-wrap justify-center gap-4">
                  {packages.map((pkg) => (
                     <button
                        key={pkg.id}
                        className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100"
                     >
                        {pkg.name} - ৳{pkg.price}
                     </button>
                  ))}
               </div>
            </div>
         </div>

         {/* FAQ Section */}
         <div className="max-w-4xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
               Frequently Asked Questions
            </h2>

            <div className="space-y-4">
               {faqs.map((faq, index) => (
                  <div
                     key={index}
                     onClick={() => setOpenIndex(openIndex === index ? null : index)}
                     className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-md"
                  >
                     <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-start gap-2">
                           <span className="text-blue-600 text-xl font-bold">Q.</span>
                           {faq.question}
                        </h3>
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 20 20"
                           fill="none"
                           className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                              }`}
                        >
                           <path
                              d="M6 8l4 4 4-4"
                              stroke="#4B5563"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </svg>
                     </div>

                     <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                           }`}
                     >
                        <p className="text-gray-600 flex items-start gap-2 leading-relaxed">
                           <span className="text-green-600 font-bold">A.</span>
                           {faq.answer}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Contact Section */}
         <div className="max-w-7xl mx-auto mt-24 bg-white rounded-xl shadow-sm p-8 ">
            <div className="text-center mb-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-2">আমাদের সাথে যোগাযোগ করুন</h2>
               <p className="text-gray-600">আমাদের টিম সবসময় আপনাকে সাহায্য করতে প্রস্তুত</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
               <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                     <FiMessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">লাইভ চ্যাট</h3>
                  <p className="text-gray-600">২৪/৭ সাপোর্ট</p>
               </div>

               <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                     <FiPhone className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">কল সেন্টার</h3>
                  <p className="text-gray-600">+880 1XXX-XXXXXX</p>
               </div>

               <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                     <FiClock className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">অফিস সময়</h3>
                  <p className="text-gray-600">সকাল ৯টা - রাত ১০টা</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BecameSeller;