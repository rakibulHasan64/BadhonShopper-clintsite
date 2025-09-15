import { Outlet } from 'react-router-dom';
import Sidbar from "@/context/dashboard/Sidbar";
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

function AppLayout() {
   const [sidebarOpen, setSidebarOpen] = useState(false);

   return (
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
         {/* Mobile sidebar toggle button */}
         <button
            className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
         >
            <FiMenu size={24} />
         </button>

         {/* Sidebar with improved mobile behavior */}
         <Sidbar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

         {/* Main content area */}
         <main className="flex-1 p-4 md:ml-64 mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6 min-h-[calc(100vh-2rem)]">
               <Outlet />
            </div>
         </main>
      </div>
   );
}

export default AppLayout;