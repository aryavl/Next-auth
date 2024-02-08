import {Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice';
export const store = configureStore({
    reducer:{
        user:userSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;