import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersReducer } from "./users/slice";
import { followReducer } from "./follow/slice";
import { filterReducer } from "./filter/slice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const followPersistConfig = {
  key: "follow",
  storage,
};
const filterPersistConfig = {
  key: "filter",
  storage,
};

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    users: usersReducer,
    follow: persistReducer(followPersistConfig, followReducer),
    filter: persistReducer(filterPersistConfig, filterReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
