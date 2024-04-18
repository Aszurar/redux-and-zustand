import ReactPlayer from 'react-player'
import { next, useCurrentLesson } from '../../store/slices/player'
import { useAppDispatch, useAppSelector } from '../../store'
import { Loader2 } from 'lucide-react'

export function VideoPlayer() {
  const dispatch = useAppDispatch()

  const { currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  function handleNextLesson() {
    dispatch(next())
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-zinc-300" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handleNextLesson}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}
