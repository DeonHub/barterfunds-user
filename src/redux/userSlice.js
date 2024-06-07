import { createSlice } from '@reduxjs/toolkit';
import { clearPersistedStorage } from '../redux/store';

// Define the initial state without directly accessing localStorage
const initialState = {
  user: null,
  isAuthorized: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthorized = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthorized = false;
      clearPersistedStorage();
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
