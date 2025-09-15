import { ScrollToTop } from '@/components/ScrollToTop';
import DasbordHome from '@/context/dashboard/Home/DasbordHome';
import NotFound from '@/context/dashboard/NotFound';
import AppLayout from '@/Layouts/AppLayout';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';


export default function DashboardRoutes() {
   const location = useLocation();

   console.log(location);


   const pathnameParts = location.pathname.split('/');
   const firstPart = pathnameParts[1];
   return (
      <>
         <ScrollToTop />
         <Routes>
            {/* Dashboard Layout */}
            <Route path="/dashboard" element={<AppLayout />}>
               <Route index  element={<DasbordHome />} />

            
               
            </Route>

            

            {/* Fallback Route */}
            {firstPart === "dashboard" &&

               <Route path="*" element={<NotFound />} />
            }
         </Routes>
      </>
   );
}
