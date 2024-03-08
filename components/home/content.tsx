import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Star } from 'lucide-react';
export  function Content() {
  return (
    <div className='flex flex-col md:flex-row md:justify-between mt-28'>
      <div className="flex flex-col w-full gap-8 md:w-1/3">
      <h1 className='text-4xl leading-[60px] font-medium'>Get more with YourSefDo-it tasks.</h1>
      <p> Plan, organize, and collaborate on any project with task management that
               can be customized for every need. </p>
      <Input placeholder='Enter your work email' className='p-4 h-14 placeholder:font-medium shadow-sm focus:border-primary-foreground focus-visible:ring-0 focus-visible:ring-offset-0 '/>
  <div className="flex md:flex-row flex-col gap-4">
  <Button className='bg-secondary text-white font-medium w-1/2 h-12  '>Get Started</Button>
  <p className='text-lg text-slate-400 font-medium'>Free Forecer no Cards</p>
  </div>
  <div className="flex gap-2">
      {[...Array(4)].map((index) => (
        <span key={index}><Star className='fill-red-500 stroke-0'/> </span>
      ))}
      <p className='text-slate-400 font-medium'> Based on 1,000+ reviews</p>
    </div>

      </div>
    </div>
  )
}
