import { configureStore } from '@reduxjs/toolkit'
import sectionSlice from './sectionSlice'

export default configureStore({
  reducer: {
    section: sectionSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
