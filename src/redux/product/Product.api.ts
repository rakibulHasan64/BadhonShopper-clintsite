/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../base.api";

export const ProductApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getProducts: builder.query({
         query: ({ search, categoryId, maxPrice }: { search?: string, categoryId?: string, maxPrice?: number } = {}) => ({
            url: "/Product",
            method: "GET",
            params: { search, categoryId, maxPrice },
         }),
      }),

      getProductByID: builder.query<any, string>({
         query: (id) => ({
            url: `/Product/${id}`,
            method: "GET",
         })
      })


      
   }),
});

export const { useGetProductsQuery,useGetProductByIDQuery } = ProductApi;
