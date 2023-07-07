import { Links } from '@/components/Links'
import Link from 'next/link'

export default function Home() {
  return (
   <div className='flex flex-col items-center justify-center'>
      <h1 className='text-gray-100 text-lg'> HOME</h1>
    <div className='flex flex-col items-center justify-center align-middle mt-6 w-82 h-82 rounded-lg bg-purple-500'>
    
      
      <div className='flex flex-1'>
        <Links />
      </div>
    </div>  
   </div>
  )
}
