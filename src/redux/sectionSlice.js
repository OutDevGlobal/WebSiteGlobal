import { createSlice } from "@reduxjs/toolkit"


const sectionSlice = createSlice({
  name: 'filter',
  initialState: {
    section: '',
  },
  reducers: {
    setSection: (state, action) => {
      state.section = action.payload
    },
  },
})

export const { setSection } = sectionSlice.actions
export default sectionSlice.reducer