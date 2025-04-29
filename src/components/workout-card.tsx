import React from 'react'
import H2 from './ui/h2'

export default function WorkoutCard() {
  return (
    <article className="flex flex-col justify-between bg-white w-2/3 h-28 p-4 rounded-lg shadow-md hover:shadow-lg duration-300">
        <header className="flex items-center">
            <H2 className="text-xl font-semibold">Cardio</H2>
            <span className="pt-1 pl-2 font-semibold text-black/75">- 30 mins</span>
        </header>
        <p className="text-black/75">Running, swimming, biking</p>
    </article>
  )
}
