import { createSlice } from '@reduxjs/toolkit';

export const routeSlice = createSlice({
  name: 'route',
  initialState: {
    startLocation: [-34.6047, -58.3995],
    endLocation: [-34.6036, -58.3985],
  },
  reducers: {
    setStartLocation: (state, action) => {
      state.startLocation = action.payload;
    },
    setEndLocation: (state, action) => {
      state.endLocation = action.payload;
    },
  },
});

export const { setStartLocation, setEndLocation } = routeSlice.actions;

export default routeSlice.reducer;