import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth.slice";
import routeReducer from "./routeSlice";


export const store = configureStore({
  reducer: {
    authLogin: authSlice.reducer,
    route: routeReducer, // Asegúrate de que el nombre aquí coincida con el utilizado en useSelector
   
  },
});