'use client'

import type { CardProps } from '@nextui-org/react'

import React from 'react'
import { Card, CardBody, Image, CardHeader } from '@nextui-org/react'
import { m, useMotionValue, domAnimation, LazyMotion, useMotionTemplate } from 'framer-motion'

interface AdditionalProps extends CardProps {
  title: string
  description: string
  image: string
  onClick?: () => void
  badge?: React.ReactNode
}

export default function WorkCard(props: AdditionalProps) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  const cardRef = React.useRef<HTMLDivElement>(null)

  function onMouseMove({ clientX, clientY }: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!cardRef?.current) return

    let { left, top } = cardRef.current?.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const { title, description, image, onClick, badge } = props

  return (
    <Card
      {...props}
      ref={cardRef}
      className="group relative w-full h-full rounded-xl bg-neutral-900 shadow-large ease-in-out duration-200 hover:scale-105"
      radius="lg"
      onMouseMove={onMouseMove}
      onClick={onClick}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-250 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 40, 200, 0.2),
              transparent 80%
            )
          `, // <- Add your own color here
          }}
        />
      </LazyMotion>
      <CardHeader className="relative w-full h-44 p-0">
        <Image
          removeWrapper
          alt=""
          className="h-full w-full object-cover rounded-t-xl"
          src={image}
          style={{
            // @ts-ignore
            '-webkit-mask-image': 'linear-gradient(to bottom, #000 70%, transparent 100%)',
          }}
        />
      </CardHeader>
      <CardBody className="px-6 py-6 space-y-4 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-base text-neutral-50 select-none">{title}</p>
          <p className="text-xs text-neutral-400 select-none">{description}</p>
        </div>
        {badge}
      </CardBody>
    </Card>
  )
}
