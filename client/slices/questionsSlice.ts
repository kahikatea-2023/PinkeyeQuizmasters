import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Question from '../../models/question'
import { fetchedQuestions } from '../apis/questionsApi'

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    return await fetchedQuestions()
  }
)

const slice = createSlice({
  name: 'questions',
  initialState: [] as Question[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, { payload }) => {
      return payload
    })
  },
})

export default slice.reducer
