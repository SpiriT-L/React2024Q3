import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
  image: string | null;
}

const initialState: ImageState = {
  image: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    addImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
  },
});

export const { addImage } = imageSlice.actions;
export default imageSlice.reducer;
