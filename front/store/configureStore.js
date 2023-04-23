import { createWrapper } from "next-redux-wrapper";
import { createStore } from "";

const configureStore = () => {
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  dubug: process.env.NODE_ENV === "development",
});

export default wrapper;
