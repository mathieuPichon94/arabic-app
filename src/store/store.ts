import { configureStore } from "@reduxjs/toolkit";
import currentIndexWordReducer from "@/utils/slice/currentIndexWordSlice";
import maxIndexWordReducer from "@/utils/slice/maxIndexWordSlice";

export const store = configureStore({
  reducer: {
    currentIndexWord: currentIndexWordReducer,
    maxIndexWordReducer: maxIndexWordReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
