import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getQuestions } from '../../server/db/questions'
import Question from '../../models/question'

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    return await getQuestions()
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
