import { create } from 'zustand'
import { COURSE_DEFAULT_VALUES } from '../dto/course'
// import { api } from '../lib/axios'
// import { AxiosError } from 'axios'

type PlayType = {
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
  course: CourseType // | null
  currentModuleIndex: number
  currentLessonIndex: number
  // isLoading: boolean
  // isError: null | AxiosError
  // loadCourse: () => Promise<void>
  play: ({ lessonIndex, moduleIndex }: PlayType) => void
  next: () => void
}

const initialState = {
  course: COURSE_DEFAULT_VALUES,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  // isLoading: true,
  // isError: null,
}

export const useStore = create<InitialStateType>((set, get) => {
  return {
    ...initialState,
    // loadCourse: async () => {
    //   set({
    //     isLoading: true,
    //   })
    //   try {
    //     const response = await api.get('/courses/1')

    //     set({
    //       course: response.data,
    //     })
    //   } catch (error) {
    //     set({
    //       isError: error as AxiosError,
    //     })
    //   } finally {
    //     set({
    //       isLoading: false,
    //     })
    //   }
    // },
    play: ({ lessonIndex, moduleIndex }: PlayType) => {
      set({
        currentLessonIndex: lessonIndex,
        currentModuleIndex: moduleIndex,
      })
    },
    next: () => {
      const { course, currentLessonIndex, currentModuleIndex } = get()

      // Se Existe uma próxima aula, vá para a próxima aula
      // Se não existir, vá para o próximo módulo
      // Se não existir próximo módulo, não faça nada
      const nextLessonIndex = currentLessonIndex + 1
      const nextLesson =
        course?.modules[currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        set({
          currentLessonIndex: nextLessonIndex,
        })
      } else {
        const nextModuleIndex = currentModuleIndex + 1
        const nextModule = course?.modules[nextModuleIndex]
        if (nextModule) {
          set({
            currentLessonIndex: 0,
            currentModuleIndex: nextModuleIndex,
          })
        }
      }
    },
  }
})

export const useCurrentLesson = () => {
  return useStore((state) => {
    const currentModuleIndex = state.currentModuleIndex
    const currentLessonIndex = state.currentLessonIndex

    const currentModule = state.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })
}
