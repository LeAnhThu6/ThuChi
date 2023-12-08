import { createSlice } from "@reduxjs/toolkit";
const API = "https://65485be9dd8ebcd4ab22ca1b.mockapi.io/thuchi";
const Slice = createSlice({
  name: "thuchi",
  initialState: {
    thuchi: [],
    name: "",
  },
  reducers: {
    Set: (state, action) => {
      return action.payload;
    },
    Add: (state, action) => {
      const newTask = {
        id: Math.random(),
        type: action.payload,
        money: action.payload,
      };
      state.thuchi.push(newTask);
      fetch(API + "/" + state.id, {
        method: "PUT",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(state),
      });
    },
    Delete: (state, action) => {
      state.thuchi = state.thuchi.filter((item) => item.id !== action.payload);
      fetch(API + "/" + state.id, {
        method: "PUT",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(state),
      });
    },
    Update: (state, action) => {
      state.thuchi = state.thuchi.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            type: action.payload.type,
            money: action.payload.money ? action.payload.money : item.money,
          };
        }
        return item;
      });
      fetch(API + "/" + state.id, {
        method: "PUT",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(state),
      });
    },
  },
});
export default Slice.reducer;
export const { Add, Delete, Update, Set } = Slice.actions;
