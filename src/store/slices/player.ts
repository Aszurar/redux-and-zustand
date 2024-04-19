import {
  PayloadAction,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
// import { useAppSelector } from '..'
import { api } from '../../lib/axios'

type PlayActionType = {
  lessonIndex: number
  moduleIndex: number
}

type LessonType = {
  id: string
  title: string
  duration: string
}

type ModuleType = {
  id: number
  title: string
  lessons: LessonType[]
}

type CourseType = {
  id: number
  modules: ModuleType[]
}

export type InitialStateType = {
  course: CourseType | null
  currentModuleIndex: number
  currentLessonIndex: number
  isLoading: boolean
  isError: SerializedError | null
}

const initialState: InitialStateType = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: true,
  isError: null,
}

export const loadCourse = createAsyncThunk('player/load', async () => {
  const response = await api.get('/courses/1')

  return response.data
})

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<PlayActionType>) => {
      state.currentLessonIndex = action.payload.lessonIndex
      state.currentModuleIndex = action.payload.moduleIndex
    },
    next: (state) => {
      // Se Existe uma próxima aula, vá para a próxima aula
      // Se não existir, vá para o próximo módulo
      // Se não existir próximo módulo, não faça nada
      const nextLessonIndex = state.currentLessonIndex + 1
      const nextLesson =
        state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course?.modules[nextModuleIndex]
        if (nextModule) {
          state.currentLessonIndex = 0
          state.currentModuleIndex = nextModuleIndex
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(loadCourse.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.isLoading = false
      state.course = action.payload
    })

    builder.addCase(loadCourse.rejected, (state, action) => {
      state.isLoading = false
      state.isError = action.error
    })
  },
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions

// export const useCurrentLesson = () => {
//   return useAppSelector((state) => {
//     const currentModuleIndex = state.player.currentModuleIndex
//     const currentLessonIndex = state.player.currentLessonIndex

//     const currentModule = state.player.course?.modules[currentModuleIndex]
//     const currentLesson = currentModule?.lessons[currentLessonIndex]

//     return { currentModule, currentLesson }
//   })
// }
