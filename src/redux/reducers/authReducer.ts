import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AuthReducerInitialState } from "../../types/auth";
import { UserRes } from "../../types/user";

const initialState: AuthReducerInitialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserRes>) => {
      state.user = action.payload;
    },
    logout: () => {
      localStorage.removeItem('token');
      return initialState;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
