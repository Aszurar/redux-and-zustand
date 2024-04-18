import { PlayCircle, Video } from 'lucide-react'

type LessonProps = {
  title: string
  duration: string
  onPlay: () => void
  isActive: boolean
}

export function Lesson({
  title,
  duration,
  onPlay,
  isActive,
}: Readonly<LessonProps>) {
  return (
    <button
      data-isActive={isActive}
      className={`flex items-center gap-3 px-6 py-2 text-sm 
        text-zinc-400 data-[isActive=true]:font-bold 
        data-[isActive=true]:text-emerald-400
        hover:bg-zinc-800 hover:text-zinc-100`}
      onClick={onPlay}
    >
      {isActive ? (
        <PlayCircle className="h-4 w-4 text-emerald-500" />
      ) : (
        <Video className="h-4 w-4 text-zinc-500 " />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
