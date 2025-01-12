import { Loader2Icon } from 'lucide-react'
import React from 'react'

function loading() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <Loader2Icon size={40} className='animate-spin' />
    </div>
  )
}

export default loading
