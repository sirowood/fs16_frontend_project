import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: 'error',
  initialState: '',
  reducers: {
    setError: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
    clearError: (_state) => {
      return '';
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
