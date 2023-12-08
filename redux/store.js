import { configureStore } from "@reduxjs/toolkit";
import thuChiReducer from "./Slice";
const store = configureStore({
  reducer: thuChiReducer,
});
export default store;
