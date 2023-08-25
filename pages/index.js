import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white px-10'>
      {/* <TextoPrueba /> */}
      <section className='min-h-screen'>
        <nav className='flex justify-between py-10 mb-12 text-xl'>
          <h1 className='font-burtons'>Leonardo Omeara</h1>
          <ul className='w-[200px] flex justify-around items-center'>
            <li className='cursor-pointer'>
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a href='#' className=' bg-cyan-900 py-2 px-4 text-white rounded-md'>Resume</a>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Hi, I'am Leonardo Omeara</h2>
          <h3 className='text-2xl py-2'>Systems Engineer and Software Developer</h3>
          <p className='text-md py-5 leading-5'>Lorem* ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.
             </p>
        </div>
        <div className='flex items-center justify-center text-5xl space-x-5'>
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
      </section>

    </main>
  )
}
