import { Instagram, LinkedinIcon, Mail, Phone,} from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='px-32 mt-24 mb-5 flex-row align-middle items-center justify-center -space-x-5 hidden lg:flex'>
        <div className='text-center justify-center w-5/12 bg-memop max-h-24 py-8 rounded-lg items-center align-middle text-xl text-white'>
          <a href="" className="hover:text-gray-400">relivememo@gmail.com</a>
        </div>
        <div className='text-center items-center align-middle justify-center w-2/12 bg-memop rounded-full aspect-square'>
          <a href="" className="hover:text-gray-400"><img src="Icon.png" className='p-10' alt="" /></a>
        </div>
        <div className='text-center justify-center w-5/12 bg-memop max-h-24 py-8 rounded-lg items-center align-middle text-xl text-white flex flex-row space-x-5'>
          <a href="" className="hover:text-gray-400">(+94) 77 951 8001</a>
          <a href="" className="hover:text-gray-400"><Instagram/></a>
          <a href="" className="hover:text-gray-400"><LinkedinIcon/></a>
        </div>
      </div>

      <div className='px-5 bg-memop mt-16 flex flex-col items-center justify-center py-10 text-white lg:hidden space-y-4'>
        <a href="" className="hover:text-gray-400 border border-white py-2 px-7 rounded-lg flex"><Mail className='mr-2'/>  relivememo@gmail.com</a>
        <a href="" className="hover:text-gray-400 border border-white py-2 px-7 rounded-lg flex"><Phone className='mr-2'/>(+94) 77 951 8001</a>
        <div className='flex space-x-4'>
          <a href="" className="hover:text-gray-400 "><Instagram/></a>
          <a href="" className="hover:text-gray-400"><LinkedinIcon/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
