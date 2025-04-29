import React from 'react'
import H2 from './ui/h2'
import Button from './ui/button'
import { XMarkIcon } from '@heroicons/react/16/solid'
import CloseButton from './close-button'
import WorkoutDetails from './workout-details'

export default function WorkoutCard() {
  return (
    <article className="flex justify-between items-center bg-white w-2/3 h-28 p-4 rounded-lg shadow-md hover:shadow-lg duration-300">
        <WorkoutDetails />
        <CloseButton />
    </article>
  )
}
