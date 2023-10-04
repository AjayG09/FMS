import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type authState = {
  authenticated: boolean;
  error: string | undefined;
  loading: boolean;
  name: string;
  userId: string;
};

const initialState: authState = {
  authenticated: false,
  error: '',
  loading: false,
  name: '',
  userId: '',
};

/** Thunks */
export const authenticateUser = createAsyncThunk('auth/authenticateUser', async () => {
  let user = {};
  //TODO: Login API Endpoint
  user = {
    authenticated: true,
    idToken: {
      userId: 'sys123',
    },
  };

  return user;
});

export const updatePassword = createAsyncThunk('auth/updatePassword', async () => {
  //TODO: Update Password API Endpoint

  return;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  //TODO: Logout API Endpoint

  return;
});

/**
 * # Auth Slice
 * This slice of state is responsible for storing authentication state
 */
const slice = createSlice({
  extraReducers: (builder) => {
    /** authenticateUser */
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(authenticateUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(authenticateUser.rejected, (state) => {
        state.loading = false;
      });

    /** updatePassword */
    builder
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    /** logout */
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  initialState,
  name: 'auth',
  reducers: {},
});

export const { actions, reducer } = slice;
export default reducer;
