import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white px-10'>
      {/* <TextoPrueba /> */}
      <section className='bg-blue-500 min-h-screen'>
        <nav className='flex justify-around py-10 mb-12 text-xl'>
          <h1>Leonardo Omeara</h1>
          <ul className='w-[200px] flex justify-around items-center'>
            <li className='cursor-pointer'>
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a href='#' className=' bg-cyan-900 py-2 px-4 text-white rounded-md'>Resume</a>
            </li>
          </ul>
        </nav>
      </section>

    </main>
  )
}
