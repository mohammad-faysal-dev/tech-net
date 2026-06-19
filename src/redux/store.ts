import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter/counterSlice";
import { createLogger } from "redux-logger";

const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
