import { ArrowRight } from 'lucide-react'
import { Stack } from './Stack'

type Props = {
  text: string
}

export function AnimatedArrowLinkText({ text }: Props): React.ReactElement {
  return (
    <Stack direction="row" gap={1} className="group items-center">
      {text}{' '}
      <ArrowRight className="size-4 group-hover:translate-x-1 transition-all" />
    </Stack>
  )
}
