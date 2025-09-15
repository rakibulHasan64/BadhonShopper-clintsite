import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";

import ClientRoutes from "./routes/ClientRoute.tsx";
// import ContextProvider from "./context/provider/ContextProvider.tsx";
import { BrowserRouter } from "react-router";
import DashboardRoutes from "./routes/DashboardRoutes.tsx";
import AuthProvider from "./context/AuthProvid/AuthProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./client/store/store.ts";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      
      <AuthProvider>

        <BrowserRouter>
          {/* <ContextProvider> */}

          <ClientRoutes />
          <DashboardRoutes />


          {/* </ContextProvider> */}
        </BrowserRouter>

      </AuthProvider>
    
    </Provider>
    
  
  </StrictMode>
);
