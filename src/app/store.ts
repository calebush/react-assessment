import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
  },
  //middleware to enable caching, invalidation, polling, and other useful features of rtk-query.
  middleware: (getDefaultMiddleware)=>
      getDefaultMiddleware().concat(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
setupListeners(store.dispatch)
