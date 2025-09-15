import config from "@/config"
import axios from "axios"


export const asxioIntance = axios.create({
  baseURL: config.baseUrl
})



asxioIntance.interceptors.request.use(function (config) {
   
   return config;
}, function (error) {
   
   return Promise.reject(error);
},
   
);


asxioIntance.interceptors.response.use(function onFulfilled(response) {
   
   return response;
}, function onRejected(error) {
   
   return Promise.reject(error);
});
