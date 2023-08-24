import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const pcPartsSlice = createSlice({
  name: 'pcParts',
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      const newPart = action.payload;
      const existingPartIndex = state.findIndex(
        (part) => part.category === newPart.category
      );

      if (existingPartIndex === -1) {
        // If the part doesn't exist, add it to the state
        state.push(newPart);
      } else {
        // If the part exists, replace it with the new part
        state[existingPartIndex] = newPart;
      }
    },
    removeFromBuilder: (state, action) => {
      const partIdToRemove = action.payload;
      const existingPartIndex = state.findIndex(
        (part) => part._id === partIdToRemove
      );
      if (existingPartIndex !== -1) {
        state.splice(existingPartIndex, 1);
      }
    },
    clearBuilder: (state) => {
      return [];
    },
  },
});

export const { addToBuilder, removeFromBuilder, clearBuilder } =
  pcPartsSlice.actions;
export default pcPartsSlice.reducer;
