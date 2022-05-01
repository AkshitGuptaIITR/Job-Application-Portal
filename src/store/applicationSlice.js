import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null
};

export const ApplicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setApplication: (state, action) => {
      const {data} = action.payload;
      state.data = data;
    }
  }
})

export const {setApplication} = ApplicationSlice.actions;

export default ApplicationSlice.reducer;
