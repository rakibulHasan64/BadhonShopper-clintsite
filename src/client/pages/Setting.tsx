import { FaCog, FaEdit, FaUser, FaPhone, FaTransgender, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

function Setting() {
   return (
      <div className="max-w-md h-screen mx-auto bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-lg p-8 mt-8 space-y-6">
         {/* Header with Icon */}
         <div className="flex items-center gap-3 text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">
            <FaCog className="text-indigo-600 animate-spin-slow" />
            <span>Account Settings</span>
         </div>

         {/* Personal Information Card */}
         <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-3">
               <div className="bg-indigo-100 p-3 rounded-full">
                  <FaUser className="text-indigo-600 text-lg" />
               </div>
               <div>
                  <h3 className="font-semibold text-gray-500 text-sm">NAME</h3>
                  <p className="text-gray-800 font-medium">Reed Hester</p>
               </div>
            </div>

            <div className="flex items-center gap-3">
               <div className="bg-indigo-100 p-3 rounded-full">
                  <FaPhone className="text-indigo-600 text-lg" />
               </div>
               <div>
                  <h3 className="font-semibold text-gray-500 text-sm">PHONE</h3>
                  <p className="text-gray-800 font-medium">01827059564</p>
               </div>
            </div>

            <div className="flex items-center gap-3">
               <div className="bg-indigo-100 p-3 rounded-full">
                  <IoMdCheckmarkCircleOutline className="text-indigo-600 text-lg" />
               </div>
               <div>
                  <h3 className="font-semibold text-gray-500 text-sm">STATUS</h3>
                  <p className="text-green-600 font-medium">ACTIVE</p>
               </div>
            </div>

            <div className="flex items-center gap-3">
               <div className="bg-indigo-100 p-3 rounded-full">
                  <FaTransgender className="text-indigo-600 text-lg" />
               </div>
               <div>
                  <h3 className="font-semibold text-gray-500 text-sm">GENDER</h3>
                  <p className="text-gray-800 font-medium">MALE</p>
               </div>
            </div>

            <div className="flex items-center gap-3">
               <div className="bg-indigo-100 p-3 rounded-full">
                  <FaCalendarAlt className="text-indigo-600 text-lg" />
               </div>
               <div>
                  <h3 className="font-semibold text-gray-500 text-sm">DATE OF BIRTH</h3>
                  <p className="text-gray-800 font-medium">July 29, 2005</p>
               </div>
            </div>

            <div className="flex items-center gap-3">
               <div className="bg-indigo-100 p-3 rounded-full">
                  <FaClock className="text-indigo-600 text-lg" />
               </div>
               <div>
                  <h3 className="font-semibold text-gray-500 text-sm">JOINED</h3>
                  <p className="text-gray-800 font-medium">New member</p>
               </div>
            </div>
         </div>

         {/* Update Button */}
         <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <FaEdit />
            <span>Update Information</span>
         </button>
      </div>
   );
}

export default Setting;