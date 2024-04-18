import { describe, expect, it } from 'vitest'
import { InitialStateType, next, play, player as reducer } from './player'

const exampleState: InitialStateType = {
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
        ],
      },
    ],
  },
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: false,
  isError: null,
}

describe('player slice', () => {
  it('should be able to play', () => {
    const state = reducer(
      exampleState,
      play({ lessonIndex: 0, moduleIndex: 0 }),
    )
    // currentModuleIndex and currentLessonIndex should be updated with
    // same values as the action payload
    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(0)
  })

  it('should be able to play the next video in the same module', () => {
    const state = reducer(exampleState, next())

    // currentModuleIndex should remain the same
    // currentLessonIndex should be updated to the next lesson
    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)
  })

  it('should be able to play the next video in the next module', () => {
    const lastLessonOfTheFirstModule = {
      ...exampleState,
      currentModuleIndex: 0,
      currentLessonIndex: 2,
    }

    const state = reducer(lastLessonOfTheFirstModule, next())

    // currentModuleIndex should be updated to the next module
    // currentLessonIndex should be updated to the first lesson of the new module
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  })

  it('should be not update the current module and lesson index if there is no next lesson available', () => {
    const lastLessonOfTheLastModule = {
      ...exampleState,
      currentModuleIndex: 1,
      currentLessonIndex: 1,
    }

    const state = reducer(lastLessonOfTheLastModule, next())

    // currentModuleIndex should remain the same
    // currentLessonIndex should be remain the same
    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(1)
  })
})
