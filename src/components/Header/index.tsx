import { MessageCircle } from 'lucide-react'
import { useCurrentLesson, useStore } from '../../zustand-store'

export function Header() {
  const isLoading = useStore((store) => store.isLoading)

  const { currentModule, currentLesson } = useCurrentLesson()
  // const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  if (isLoading) {
    return (
      <header className="flex animate-pulse items-center justify-between">
        <div className="flex flex-1 flex-col gap-2">
          <div className="h-6 w-full max-w-sm rounded bg-zinc-700" />
          <div className="h-4 w-full max-w-xs rounded bg-zinc-700" />
        </div>

        <div className="h-9 w-40 rounded bg-zinc-700" />
      </header>
    )
  }

  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentModule?.title}</h1>
        <span className="text-sm text-zinc-400">{currentLesson?.title}</span>
      </div>

      <button
        className={`flex items-center gap-2 rounded bg-violet-500 px-3 py-2 
        text-sm font-medium text-white transition-all duration-300
        hover:bg-violet-600 
        `}
      >
        <MessageCircle className="h-4 w-4" />
        Deixar Feedback
      </button>
    </header>
  )
}
