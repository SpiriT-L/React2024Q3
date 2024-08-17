import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../slices/countriesSlice';
import formReducer from '../slices/formSlice';
import imageReducer from '../slices/imageSlice';

const store = configureStore({
  reducer: {
    image: imageReducer,
    countries: countriesReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
