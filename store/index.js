import {configureStore} from '@reduxjs/toolkit';

import {versesApi} from './verses/service';
import versesSlice from './verses/slice';

export const store = configureStore({
  reducer: {
    [versesApi.reducerPath]: versesApi.reducer,
    versesData: versesSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([versesApi.middleware]),
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState;
