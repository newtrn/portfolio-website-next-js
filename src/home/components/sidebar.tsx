import { useMediaQuery } from 'usehooks-ts'
import { Avatar } from '@nextui-org/react'

import { cn } from '@/utils/cn'
import { useState } from 'react'

import Education from '@/constants/education.json'
import Contact from '@/constants/contact.json'
import Link from 'next/link'

const Sidebar = () => {
  const isCompact = useMediaQuery('(max-width: 768px)')
  const [collapsed, setCollapsed] = useState(isCompact)
  const educationData = Education.data
  const contactData = Contact.data

  const handleOnClick = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div
      onClick={handleOnClick}
      className={cn(
        'relative flex h-full w-screen md:w-72 flex-col !border-r-small border-divider p-6 transition-width bg-white bg-opacity-5 shadow-sidebar ease-in-out duration-200 cursor-pointer space-y-6 divide-y divide-dashed divide-white/40 overflow-y-auto overflow-x-hidden',
        {
          '!w-16 items-center px-2 py-6': !collapsed,
        }
      )}
      style={{ scrollbarWidth: 'none' }}
    >
      <div className="px-3 space-y-4">
        <Avatar isBordered src="/images/profile.png" className={cn('flex-none ease-in-out duration-200 w-10 h-10', { 'w-40 h-40': collapsed })} />
        <div className={cn('flex max-w-full flex-col visible opacity-100', { 'hidden': !collapsed })}>
          <p className="truncate text-2xl font-medium text-default-600">
            Suppawit
            <br />
            Satitsongtam
          </p>
          <p className="truncate text-tiny text-default-400">Frontend developer</p>
        </div>
      </div>
      {collapsed && (
        <>
          <div className="space-y-2 pt-4">
            {contactData.map((contact) => {
              return (
                <div className="px-3 text-sm space-y-1">
                  <div>{contact.name}</div>
                  <Link onClick={(e) => e.stopPropagation()} href={contact.link} className="opacity-60" target="_blank">
                    {contact.value}
                  </Link>
                </div>
              )
            })}
          </div>
          <div className="space-y-2 pt-4">
            <header className="flex items-center gap-3 rounded-medium border-small border-divider px-3">
              <h2 className="font-bold">Education</h2>
            </header>
            <div className="px-3 text-sm space-y-1">
              {educationData.map((education) => {
                return (
                  <div>
                    <div>{education.name}</div>
                    <div className="opacity-60">({education.address})</div>
                    <div>{education.year}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
