import { FiShield, FiGift, FiUsers, FiTool } from "react-icons/fi";

export default function WhyChooseUs() {
   return (
      <>
         <style>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .card-border {
          background: conic-gradient(from 0deg, #00F5FF, #FF00C7, #FFD700, #00FF85, #8A2BE2, #00F5FF);
          background-size: 300% 300%;
          animation: shine 4s ease-in-out infinite;
          padding: 2px;
          border-radius: 1rem;
        }
      `}</style>

         <div className="max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
               Why Choose Our Reseller Program?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
               {[
                  {
                     icon: <FiShield className="h-6 w-6 text-blue-600" />,
                     bg: "bg-blue-100",
                     title: "Trusted Platform",
                     desc: "১০০% সুরক্ষিত এবং বিশ্বস্ত প্ল্যাটফর্ম",
                  },
                  {
                     icon: <FiGift className="h-6 w-6 text-green-600" />,
                     bg: "bg-green-100",
                     title: "Exclusive Benefits",
                     desc: "রিসেলারদের জন্য বিশেষ সুবিধা এবং অফার",
                  },
                  {
                     icon: <FiUsers className="h-6 w-6 text-purple-600" />,
                     bg: "bg-purple-100",
                     title: "Community Support",
                     desc: "১০,০০০+ রিসেলারদের কমিউনিটি",
                  },
                  {
                     icon: <FiTool className="h-6 w-6 text-yellow-600" />,
                     bg: "bg-yellow-100",
                     title: "Powerful Tools",
                     desc: "ব্যবসা বৃদ্ধির জন্য শক্তিশালী টুলস",
                  },
               ].map((item, i) => (
                  <div key={i} className="card-border  transition-transform duration-300 bg-[#ff0066] p-1">
                     <div className=" p-6 rounded-[14px] text-center h-full shadow-md bg-white ">
                        <div className={`mx-auto h-12 w-12 ${item.bg} flex items-center justify-center mb-4 rounded-full`}>
                           {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
