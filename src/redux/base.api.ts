
// import config from "@/config"
// import {createApi} from "@reduxjs/toolkit/query/react"
// export const baseApi = createApi({

//    reducerPath: "baseApi",
//    baseQuery: config.baseUrl,
//    endpoints: ()=> ({})
   
// })

import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "./axiosBaseQuery"


export const baseApi = createApi({
   reducerPath: "baseApi",
   baseQuery: axiosBaseQuery(),
   endpoints: () => ({}),
})
