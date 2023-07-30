// pcBuilderSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCPU: null,
  selectedGPU: null,
  selectedRAM: null,
  selectStorage: null,
  selectMonitor: null,
};

const pcBuilderSlice = createSlice({
  name: 'pcBuilder',
  initialState,
  reducers: {
    selectCPU: (state, action) => {
      state.selectedCPU = action.payload;
    },
    selectGPU: (state, action) => {
      state.selectedGPU = action.payload;
    },
    // Power Supply Unit
    selectRAM: (state, action) => {
      state.selectedRAM = action.payload;
    },
    selectStorage: (state, action) => {
      state.selectedStorage = action.payload;
    },
    selectMonitor: (state, action) => {
      state.selectedMonitor = action.payload;
    },
  },
});

export const { selectCPU, selectGPU, selectRAM } =
  pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
