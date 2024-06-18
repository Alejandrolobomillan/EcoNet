import { create } from 'zustand'

const useStore = create((set) => ({
  username: "",
  password: "",
  login: (username, password) => set(() => ({username, password})),
  logout: () => set(() => ({username: "", password: ""})),
}));

export default useStore;
