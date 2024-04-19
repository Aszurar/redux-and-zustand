import { ChevronDown } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Lesson } from './Lesson'
import { useStore } from '../../zustand-store'

type ModuleProps = {
  title: string
  moduleIndex: number
  amountOfLessons: number
}

export function Module({
  title,
  moduleIndex,
  amountOfLessons,
}: Readonly<ModuleProps>) {
  const [parent] = useAutoAnimate()

  const { currentModuleIndex, currentLessonIndex, play } = useStore()

  const lessons = useStore(
    (state) => state.course?.modules[moduleIndex].lessons,
  )

  // const { currentModuleIndex, currentLessonIndex } = useAppSelector((state) => {
  //   const currentModuleIndex = state.player.currentModuleIndex
  //   const currentLessonIndex = state.player.currentLessonIndex

  //   return { currentModuleIndex, currentLessonIndex }
  // })
  // const lessons = useAppSelector(
  //   (state) => state.player.course?.modules[moduleIndex].lessons,
  // )

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger
        type="button"
        className="flex w-full items-center gap-3 bg-zinc-800 p-4"
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full 
            bg-zinc-950 text-xs`}
        >
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown
          className={`ml-auto h-5 w-5 text-zinc-400 
            transition-transform group-data-[state=open]:rotate-180`}
        />
      </Collapsible.Trigger>

      <Collapsible.Content ref={parent}>
        <nav className="relative flex flex-col gap-2 py-4">
          {!!lessons &&
            lessons.map((lesson, lessonIndex) => {
              const isCurrentModule = currentModuleIndex === moduleIndex
              const isCurrentLesson = currentLessonIndex === lessonIndex
              const isActive = isCurrentModule && isCurrentLesson

              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => play({ lessonIndex, moduleIndex })}
                  isActive={isActive}
                />
              )
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
