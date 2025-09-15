import { Home, ShoppingBag, MessageCircle, LogIn } from 'lucide-react';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router';


function FooterMenus() {
   return (
      <div className="w-full block md:hidden sticky bottom-0 bg-[#ff0066]/90 z-50">
         <div className="px-4 py-3">
            <ul className="text-white flex items-center justify-around sm:gap-6 text-xs">
               <Link to={"/"} className="flex flex-col items-center gap-1">
                  <Home size={20} />
                  <span>Home</span>
               </Link>

               <li className="flex flex-col items-center gap-1 relative">
                  <Link to={"/favoriteItems"} className="relative">
                     <MdFavoriteBorder className="text-2xl" />
                     <span className="absolute -top-2 -right-2 bg-[#44CEB0] text-xs px-1 rounded-full">
                        1
                     </span>
                  </Link>
                  <span>Wishlist</span>
               </li>

               <Link to={"/shop"} className="flex flex-col items-center gap-1">
                  <ShoppingBag size={20} />
                  <span>Shop</span>
               </Link>

               <Link to={"/Message"} className="flex flex-col items-center gap-1">
                  <MessageCircle size={20} />
                  <span>Message</span>
               </Link>

               <li className="flex flex-col items-center gap-1 relative">
                  <Link to={"/add-to-cart"} className="relative">
                     <AiOutlineShopping className="text-2xl" />
                     <span className="absolute -top-2 -right-2 bg-[#44CEB0] text-xs px-1 rounded-full">
                        0
                     </span>
                  </Link>
                  <span>Items</span>
               </li>

               <li>
                  <Link to="/login" className="flex flex-col items-center gap-1">
                     <LogIn size={20} />
                     <span>Log in</span>
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default FooterMenus;
