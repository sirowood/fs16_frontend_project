import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: User | null,
};

const initialState: InitialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
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
