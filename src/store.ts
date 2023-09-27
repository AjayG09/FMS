import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

/**
 * # Store
 * Redux store for the entire application. This is the single source of
 * truth for everything related to data in the app (minus grids).  Redux style guide
 * should be followed for best practices: https://redux.js.org/style-guide/
 *
 * The structure of state should be determined in the slice reducers, and
 * should follow the normalized format: https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
 */
const store = configureStore({
  reducer: reducers,
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
