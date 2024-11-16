import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPost } from "@/models/Post";

// Define the TS type for the counter slice's state
export interface PostsState {
  posts: IPost[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the initial value for the slice state
const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    initialize: (state, action: PayloadAction<IPost[]>) => {
      state.posts = JSON.parse(JSON.stringify(action.payload));
      state.status = 'succeeded';
    }
  },
})

// Export the generated action creators for use in components
export const { initialize } = postsSlice.actions

// Export the slice reducer for use in the store configuration
export default postsSlice.reducer