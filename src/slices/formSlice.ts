import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  name: string;
  age: number;
  email: string;
  gender: string;
  termsAccepted: boolean;
  country: string;
}

const initialState: FormState = {
  name: '',
  age: 0,
  email: '',
  gender: '',
  termsAccepted: false,
  country: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm(state, action: PayloadAction<Partial<FormState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
