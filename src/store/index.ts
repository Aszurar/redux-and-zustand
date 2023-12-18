import { configureStore, createSlice } from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux"

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer Café', 'Estudar React'],

  reducers: {
    addTodo: (state, action) => {
      console.log('Ação', action)
      console.log('Estado',state)
      state.push(action.payload.newTodo)
    }
  }
})

export const  store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
})


export const { addTodo } = todoSlice.actions

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector