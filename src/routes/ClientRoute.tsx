import { Suspense } from 'react';

import { Routes, Route, useLocation } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa';
import LoadingSpinner from '../client/components/common/LoadingSpinner'
import Footer from '../client/components/Footer';
import ErrorPage from '../client/components/ErrorPage';
import Register from '../client/pages/auth/Register';

import PrivacyPolicy from '../client/pages/PrivacyPolicy';
import Home from '../client/pages/Home';
import MainLayout from '../Layouts';
import Navbar from '../client/components/Navbar';
import Login from '@/client/components/auth/LogIn';
import Offers from '@/client/pages/Offers';
import FootersMenuesMain from '@/client/pages/FootersMenuesMain';
import ShopLayout from '@/client/pages/ShopLayout';
import FavoriteItemsPage from '@/client/pages/FavoriteItemsPage';
import MyAccountPage from '@/client/pages/MyAccountPage';
import Setting from '@/client/pages/Setting';
import AddTocartPage from '@/client/pages/AddTocartPage';
import AllDetlisPage from '@/client/pages/AllDetlisPage';
import BeCameSellerPage from '@/client/pages/BeCameSellerPage';
import UserDasbordPage from '@/client/pages/userDasbodPagelayout/UserDasbordPage';
import { ScrollToTop } from '@/components/ScrollToTop';
import ResetPassword from '@/client/pages/auth/ResetPassword';
import CheckOut from '@/client/pages/CheckOut';

const ClientRoutes = () => {
  const location = useLocation();

console.log(location);


const pathnameParts = location.pathname.split('/'); 
const firstPart = pathnameParts[1]; 

console.log(firstPart);

  
  return (
    <div className={`${firstPart === 'dashboard' && 'hidden'}`}>
      <ScrollToTop />
      <div className="">
        <Suspense
          fallback={
            <div>
              <LoadingSpinner />
            </div>
          }
        >
          <Navbar />

          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<MainLayout />} />
            <Route index element={<Home />} />
            <Route path="/login" element={< Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/send-otp" element={<ResetPassword />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* user routes here */}

            <Route path="/offer" element={<Offers />} />
            <Route path="/shop" element={<ShopLayout />} />
            <Route path="/favoriteItems" element={<FavoriteItemsPage />} />
            <Route path="/myaccount" element={<MyAccountPage />} />
            <Route path="/satting" element={<Setting />} />
            <Route path="/detlis/:id" element={<AllDetlisPage />} />
            <Route path="/add-to-cart" element={<AddTocartPage />} />
            <Route path="/beCameSellerPage" element={<BeCameSellerPage />} />
            <Route path="/userDasbord" element={<UserDasbordPage />} />
            <Route path="/checkOut" element={<CheckOut />} />



            {/* 404 Page */}

            {firstPart !== 'dashboard' && (
              <Route path="*" element={<ErrorPage />} />
            )}
          </Routes>
        </Suspense>
      </div>
      {<Footer />}
      <Toaster position="top-center" />
      {/* WhatsApp Floating Button */}
      <a
        href=""
        target="_blank"
        rel="noreferrer noopener"
        className={`fixed bottom-12 right-4 z-50 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#25d366]`}
      >
        <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#25d366] animate-ping"></div>
        <div className="relative z-20">
          <FaWhatsapp className="text-white w-6 h-6" />
        </div>
      </a>

      <FootersMenuesMain />


      
    </div>
  );
};

export default ClientRoutes;
