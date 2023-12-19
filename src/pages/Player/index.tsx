import { Header } from '../../components/Header'
import { VideoPlayer } from '../../components/VideoPlayer'
import { Module } from '../../components/Module'

export function Player() {
  return (
    <div
      className={`flex h-screen items-center justify-center bg-zinc-950 
                text-zinc-50`}
    >
      <div className="max-w-app flex flex-1 flex-col gap-6">
        <Header />
        <main
          className={`relative flex overflow-hidden rounded-lg border 
      border-zinc-800 bg-zinc-900 pr-80 shadow`}
        >
          <div className="flex flex-1">
            <VideoPlayer />
          </div>
          <aside
            className={`scrollbar-thumb-rounded-md absolute bottom-0 right-0 top-0 
              w-80 divide-y-2 divide-zinc-900 overflow-y-scroll 
              border-l border-zinc-800 bg-zinc-900 scrollbar-thin 
              scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 
              hover:scrollbar-thumb-zinc-700 active:scrollbar-thumb-zinc-600`}
          >
            <Module
              moduleIndex={0}
              title="Desvendando o Redux"
              amountOfLessons={3}
            />
            <Module
              moduleIndex={0}
              title="Desvendando o Redux"
              amountOfLessons={3}
            />
            <Module
              moduleIndex={0}
              title="Desvendando o Redux"
              amountOfLessons={3}
            />
          </aside>
        </main>
      </div>
    </div>
  )
}
