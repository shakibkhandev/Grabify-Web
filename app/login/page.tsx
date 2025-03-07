import { AuthenticationForm } from '@/components/Authentication/AuthenticationForm'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen h-auto '>
      <div className='max-w-[800px] m-auto mt-20 p-20'>
      <AuthenticationForm />
      </div>
    </div>
  )
}
