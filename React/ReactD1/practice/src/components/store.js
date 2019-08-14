import createStore from "unistore";
import { longStackSupport } from "q";

export let store = createStore({
  nama: "",
  email: "",
  isLogin: false
});

export const actions = store => ({
  setNama(state, value) {
    return { nama: value };
  },
  setEmail(state, value) {
    return { email: value };
  },
  setIsLogin(state) {
    return { isLogin: true };
  },
  signOut(state) {
    return { isLogin: false };
  }
});
