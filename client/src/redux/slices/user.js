import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  users: [],
  pulled: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersSuccess(state, action) {
      state.users = action.payload;
      state.pulled = moment().toString();
      return state;
    },
  },
});

export const { getUsersSuccess } = slice.actions;

export default slice.reducer;
