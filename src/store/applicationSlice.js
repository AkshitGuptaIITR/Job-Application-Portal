import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      name: "Akshit Gupta",
      resume: "Test",
      mobileNumber: "7877553148",
      emailId: "gakshit92@gmail.com",
      acadInfo: "2nd year IIT Roorkee",
      professionalExperience: "2 yrs",
      status: "applied",
    },
  ],
};

export const ApplicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setApplication: (state, action) => {
      const { data } = action.payload;
      state.data = [...initialState.data, ...data];
    },
  },
});

export const { setApplication } = ApplicationSlice.actions;

export default ApplicationSlice.reducer;
