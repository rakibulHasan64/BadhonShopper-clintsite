
import { baseApi } from "../base.api";


const authApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      register: builder.mutation({
         query: (userInfo) => ({
            url: "/user/register",
            method: "POST",
            data: userInfo,
         })
      }),
      

      google: builder.mutation({
         query: (userInfo) => ({
            url: "/auth/google",
            method: "POST",
            data: userInfo,
         })
      })



   })

   
})

export const {useRegisterMutation, useGoogleMutation}=authApi