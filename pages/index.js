import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import deved from '../public/sample/dev-ed-wave.png'


import code from "../public/sample/code.png";
import design from "../public/sample/design.png";
import consulting from "../public/sample/consulting.png";

import web1 from "../public/sample/web1.png";
import web2 from "../public/sample/web2.png";
import web3 from "../public/sample/web3.png";
import web4 from "../public/sample/web4.png";
import web5 from "../public/sample/web5.png";
import web6 from "../public/sample/web6.png";

import espbroww3 from "../public/ss/espbroww3.png";
import bblap1 from "../public/ss/bblap1.png";
import go_ae from "../public/ss/go_ae.png";


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
        <div className='relative'>
          <Image className='w-80 mx-auto' src={deved} alt='dev-test' />
        </div>
      </section>
      <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={espbroww3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={bblap1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={go_ae}
              />
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div> */}
          </div>
      </section>
      <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Technologies</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
      {/* <section>
        <div className=''>
          <h1 className='text-3xl py-2'>Projects...</h1>
          <p>This is some of the the projects i've worked on</p>
        </div>
        <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer?¿?¿?¿</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I've done remote work as <span className="text-teal-500">"Data Automation Intern"</span> working with Python and API's. Also, <span className="text-teal-500">Freelance Web Developer</span> using HTML, CSS, and JavaScript.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have solid Knowledge of <span>JavaScript</span>, <span>React</span> and <span>Databases</span>.
            </p>
          </div>
      </section> */}


    </main>
  )
}
