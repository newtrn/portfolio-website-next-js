'use client'

import Sidebar from '@/src/home/components/sidebar'
import WorkCard from '@/src/pastwork/components/card'
import Badge from '@/src/pastwork/components/badge'

import { Skill } from '@/type/skill'

import PastworkData from '@/constants/pastwork.json'
import ExperienceData from '@/constants/experience.json'
import { cn } from '@/utils/cn'

const HomePage = () => {
  const workData = PastworkData.data
  const experienceData = ExperienceData.data

  const getBadges = (skills: Skill[]) => {
    return (
      <div className="flex gap-2">
        {skills.map((skill) => {
          return <Badge skill={skill} />
        })}
      </div>
    )
  }

  return (
    <div className="flex h-dvh w-full">
      <Sidebar />
      <div className="w-full flex-1 flex-col p-4 h-screen overflow-hidden flex">
        <main className="flex-1 w-full overflow-y-auto overflow-x-hidden pb-10 md:p-4">
          <div>
            <header className="flex items-center gap-3 rounded-medium border-small border-divider py-4 md:px-4 px-0">
              <h2 className="text-xl font-medium">Experiences</h2>
            </header>
            <div className="md:px-4 space-y-2">
              {experienceData.map((experience, index) => {
                return (
                  <div
                    key={index}
                    className={cn(
                      'flex flex-col w-full md:w-[70%] gap-2 rounded-xl p-3 bg-exp-card bg-opacity-5',
                      index === 0 ? 'opacity-100' : 'opacity-70'
                    )}
                  >
                    <div className="text-sm font-medium">
                      {experience.company} - {experience.position}
                    </div>
                    <div className="text-xs">{experience.range}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <header className="flex items-center gap-3 rounded-medium border-small border-divider p-4">
              <h2 className="text-xl font-medium">Portfolio</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-max w-full gap-6 rounded-medium border-small border-divider">
              {workData.map((work, index) => {
                return (
                  <WorkCard
                    key={index}
                    title={work.title}
                    description={work.description}
                    image={work.image}
                    onClick={() => {}}
                    badge={getBadges(work.skill as Skill[])}
                  />
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
export default HomePage
