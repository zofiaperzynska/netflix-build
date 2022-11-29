import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";
import { fetchCount } from "./counter/counterAPI";
import { UserCredential } from "firebase/auth";

export interface userState {
  user: LoginAction | null;
}

const initialState: userState = {
  user: null,
};

interface LoginAction {
  uid: string;
  email: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action: PayloadAction<LoginAction>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
