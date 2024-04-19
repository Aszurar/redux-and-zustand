import { beforeEach, describe, expect, it } from 'vitest'
import { useStore as store } from '.'

const mockedCourse = {
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
}

const initialState = store.getState()

describe('zustand store', () => {
  beforeEach(() => {
    store.setState(initialState)
  })

  it('should be able to play', () => {
    const { play } = store.getState()

    play({ lessonIndex: 1, moduleIndex: 0 })

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    // currentModuleIndex and currentLessonIndex should be updated with
    // same values as the action payload
    expect(currentModuleIndex).toEqual(0)
    expect(currentLessonIndex).toEqual(1)
  })

  it('should be able to play the next video in the same module', () => {
    store.setState({
      course: mockedCourse,
    })

    const { next } = store.getState()
    next()

    const { currentLessonIndex, currentModuleIndex } = store.getState()
    // currentModuleIndex should remain the same
    // currentLessonIndex should be updated to the next lesson
    expect(currentModuleIndex).toEqual(0)
    expect(currentLessonIndex).toEqual(1)
  })

  it('should be able to play the next video in the next module', () => {
    store.setState({
      course: mockedCourse,
    })
    const { next } = store.getState()

    store.setState({
      currentLessonIndex: 5,
    })

    next()
    const { currentModuleIndex, currentLessonIndex } = store.getState()
    // currentModuleIndex should be updated to the next module
    // currentLessonIndex should be updated to the first lesson of the new module
    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(0)
  })

  it('should be not update the current module and lesson index if there is no next lesson available', () => {
    store.setState({
      course: mockedCourse,
    })
    const { next } = store.getState()

    store.setState({
      currentLessonIndex: 3,
      currentModuleIndex: 1,
    })
    next()
    const { currentModuleIndex, currentLessonIndex } = store.getState()
    // currentModuleIndex should remain the same
    // currentLessonIndex should be remain the same
    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(3)
  })
})
