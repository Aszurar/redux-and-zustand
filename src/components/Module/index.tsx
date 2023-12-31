import { ChevronDown } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'

import { Lesson } from './Lesson'
import { useAutoAnimate } from '@formkit/auto-animate/react'

type ModuleProps = {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({
  title,
  moduleIndex,
  amountOfLessons,
}: Readonly<ModuleProps>) {
  const [parent] = useAutoAnimate()
  return (
    <Collapsible.Root className="group">
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
        <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="Fundamentos do Redux" duration="09:13" />
          <Lesson title="Fundamentos do Redux" duration="09:13" />
          <Lesson title="Fundamentos do Redux" duration="09:13" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
