"use client";
import { create } from "zustand";

export type UserState = {
  userInfo: {
    _id: string;
    name : string;
    email: string
    role: string
  } | null
};
type UserActions = {
  setUserInfo: (userInfo: UserState['userInfo']) => void;
};
const initialState: UserState = {
  userInfo: null,
};

export type UserSlice = UserState & UserActions;


const useAuthStore = create<UserSlice>((set) => ({
  ...initialState,
  setUserInfo: (userInfo) =>
    set(() => ({
        userInfo: userInfo
    })),
}));

export default useAuthStore;
