import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import contentReducer from './contentSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const index = configureStore({
  reducer: {
    contentReducer: contentReducer,
  },
});

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
