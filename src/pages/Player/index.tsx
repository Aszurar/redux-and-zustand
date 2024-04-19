// import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { VideoPlayer } from '../../components/VideoPlayer'
import { Module } from '../../components/Module'
// import { useAppDispatch, useAppSelector } from '../../store'
// import { loadCourse, useCurrentLesson } from '../../store/slices/player'
import { toast } from 'sonner'
import { useCurrentLesson, useStore } from '../../zustand-store'
import { useEffect } from 'react'

export function Player() {
  const { course, isError, isLoading, loadCourse } = useStore((store) => {
    return {
      course: store.course,
      loadCourse: store.loadCourse,
      isLoading: store.isLoading,
      isError: store.isError,
    }
  })

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    loadCourse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const dispatch = useAppDispatch()
  // const { currentLesson } = useCurrentLesson()
  // const modules = useAppSelector((state) => state.player.course?.modules)
  // const isCourseLoaded = useAppSelector((state) => state.player.isLoading)
  // const isError = useAppSelector((state) => state.player.isError)

  useEffect(() => {
    if (currentLesson) {
      window.document.title = `${currentLesson?.title}`
    }
  }, [currentLesson])

  // useEffect(() => {
  //   dispatch(loadCourse())
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  useEffect(() => {
    if (isError) {
      toast.error('Falha ao carregar o curso. Tente novamente mais tarde.')
    }
  }, [isError])

  return (
    <div
      className={`flex h-screen items-center justify-center bg-zinc-950 
                text-zinc-50`}
    >
      <div className="flex max-w-app flex-1 flex-col gap-6">
        <Header />
        <main
          className={`relative flex overflow-hidden rounded-lg border 
      border-zinc-800 bg-zinc-900 pr-80 shadow`}
        >
          <div className="flex flex-1">
            <VideoPlayer />
          </div>
          <aside
            className={`absolute bottom-0 right-0 top-0 w-80 
              divide-y-2 divide-zinc-900 overflow-y-scroll border-l 
              border-zinc-800 bg-zinc-900 scrollbar-thin 
              scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 
                scrollbar-thumb-rounded-md hover:scrollbar-thumb-zinc-700 
              active:scrollbar-thumb-zinc-600`}
          >
            {isLoading && (
              <div className="flex animate-pulse flex-col gap-3">
                <div className="h-[72px] w-full max-w-sm rounded bg-zinc-700" />
                <div className="h-9 w-full max-w-xs rounded bg-zinc-700" />
                <div className="h-9 w-full max-w-xs rounded bg-zinc-700" />
                <div className="h-9 w-full max-w-xs rounded bg-zinc-700" />
                <div className="h-9 w-full max-w-xs rounded bg-zinc-700" />
                <div className="h-9 w-full max-w-xs rounded bg-zinc-700" />

                <div className="mt-3 h-[72px] w-full max-w-xs rounded bg-zinc-700" />
              </div>
            )}
            {!!course?.modules &&
              course?.modules.map((module, index) => (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  amountOfLessons={module.lessons.length}
                />
              ))}
          </aside>
        </main>
      </div>
    </div>
  )
}
