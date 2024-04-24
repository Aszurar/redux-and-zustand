import ReactPlayer from 'react-player'
// import { Loader2 } from 'lucide-react'
import { useCurrentLesson, useStore } from '../../zustand-store'

export function VideoPlayer() {
  const { currentLesson } = useCurrentLesson()
  // const isCourseLoading = useStore((state) => state.isLoading)
  const next = useStore((state) => state.next)

  function handleNextLesson() {
    next()
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      {/* {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-zinc-300" />
        </div>
      ) : ( */}
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handleNextLesson}
        url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
      />
      {/* )} */}
    </div>
  )
}
