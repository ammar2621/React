import createStore from "unistore";

export const store = createStore({
  name: "",
  email: "",
  isLogin: ""
});

export const actions = store => ({
  setName(state) {
    return;
  }
});
