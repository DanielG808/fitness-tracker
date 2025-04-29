import React from 'react'
import H2 from './ui/h2'
import Button from './ui/button'
import { XMarkIcon } from '@heroicons/react/16/solid'

export default function WorkoutCard() {
  return (
    <article className="flex justify-between items-center bg-white w-2/3 h-28 p-4 rounded-lg shadow-md hover:shadow-lg duration-300">
        <div className="flex flex-col justify-between h-full">
            <header className="flex items-center">
                <H2 className="text-xl font-semibold">Cardio</H2>
                <span className="pt-1 pl-2 font-semibold text-black/75">- 30 mins</span>
            </header>
            <p className="text-black/75">Running, swimming, biking</p>
        </div>
        <Button className="flex items-center bg-white text-background-light hover:text-background-dark hover:bg-white">
            <XMarkIcon className="h-6 w-6" />
        </Button>
    </article>
  )
}
