import { baseApi } from "../base.api";

export const categoryApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getCategories: builder.query({
         query: () => ({
            url: "/Category",   
            method: "GET",
         }),
      }),
   }),
});


export const { useGetCategoriesQuery } = categoryApi;
