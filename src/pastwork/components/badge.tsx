import { Skill } from '@/type/skill'
import { Chip } from '@nextui-org/react'

const NextJsBadge = () => {
  return (
    <Chip variant="shadow" className="bg-[#640D6B] w-fit text-[8px] h-5">
      Next.js
    </Chip>
  )
}

const TailwindBadge = () => {
  return (
    <Chip variant="shadow" className="bg-[#50B498] w-fit text-[8px] h-5">
      Tailwindcss
    </Chip>
  )
}

const ReactBadge = () => {
  return (
    <Chip variant="shadow" className="bg-[#478CCF] w-fit text-[8px] h-5">
      React
    </Chip>
  )
}

const CSSBadge = () => {
  return (
    <Chip variant="shadow" className="bg-[#E68369] w-fit text-[8px] h-5">
      CSS
    </Chip>
  )
}

const Badge = ({ skill }: { skill: Skill }) => {
  switch (skill) {
    case Skill.NextJs:
      return <NextJsBadge />
    case Skill.Tailwind:
      return <TailwindBadge />
    case Skill.React:
      return <ReactBadge />
    case Skill.CSS:
      return <CSSBadge />
    default:
      return null
  }
}

export default Badge
