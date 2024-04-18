import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppSelector } from '..'

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

type InitialStateType = {
  course: CourseType
  currentModuleIndex: number
  currentLessonIndex: number
}

const initialState: InitialStateType = {
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
          { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
          {
            id: 'w-DW4DhDfcw',
            title: 'Estilização do Post',
            duration: '10:05',
          },
          {
            id: 'D83-55LUdKE',
            title: 'Componente: Header',
            duration: '06:33',
          },
          {
            id: 'W_ATsETujaY',
            title: 'Componente: Sidebar',
            duration: '09:12',
          },
          { id: 'Pj8dPeameYo', title: 'CSS Global', duration: '03:23' },
          {
            id: '8KBq2vhwbac',
            title: 'Form de comentários',
            duration: '11:34',
          },
        ],
      },
      {
        id: 2,
        title: 'Estrutura da aplicação',
        lessons: [
          {
            id: 'gE48FQXRZ_o',
            title: 'Componente: Comment',
            duration: '13:45',
          },
          { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
          {
            id: 'h5JA3wfuW1k',
            title: 'Interações no JSX',
            duration: '06:33',
          },
          {
            id: '1G0vSTqWELg',
            title: 'Utilizando estado',
            duration: '09:12',
          },
        ],
      },
    ],
  },
  currentModuleIndex: 0,
  currentLessonIndex: 0,
}

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
        state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course.modules[nextModuleIndex]
        if (nextModule) {
          state.currentLessonIndex = 0
          state.currentModuleIndex = nextModuleIndex
        }
      }
    },
  },
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const currentModuleIndex = state.player.currentModuleIndex
    const currentLessonIndex = state.player.currentLessonIndex

    const currentModule = state.player.course.modules[currentModuleIndex]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}
