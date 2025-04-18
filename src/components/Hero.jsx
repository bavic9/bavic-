import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  const [typeEffect] = useTypewriter({
    words: ['Hi all. I am'],
    loop: true,
    pauseFor: 10,
    typeSpeed: 10,
    delaySpeed: 10000000000,
    deleteSpeed: 40,
  })

  const [typeNew] = useTypewriter({
    words: ['Adeyeye Adebayo'],
    loop: true,
    pauseFor: 10,
    typeSpeed: 10,
    delaySpeed: 10000000000,
    deleteSpeed: 40,
  })

  const [title] = useTypewriter({
    words: ['> Front-end developer'],
    loop: true,
    pauseFor: 10,
    typeSpeed: 10,
    delaySpeed: 10000000000,
    deleteSpeed: 40,
  })

  const [texts] = useTypewriter({
    words: ['I am a versatile frontend developer with over three years of experience, specializing in building structured, high-quality, and interactive web applications. Passionate about clean design and seamless user experiences, I thrive on creating engaging and efficient digital solutions.'],
    loop: true,
    pauseFor: 10,
    typeSpeed: 1,
    delaySpeed: 10000000000,
    deleteSpeed: 40,
  })

  return (
    <section className=''>
      <div className='p-8 flex flex-col lg:flex-row justify-between items-center lg:h-screen gap-10 md:w-[80%] min-h-[100vh] m-auto'>
        <div className='flex flex-col lg:w-[50%] gap-4 justify-between'>
          <div className=' w-full mt-28'>
            <div className='text-white flex flex-col gap-4'>
              <p className='xs:text-base text-lg md:text-xl font-light'>
                {typeEffect}
              </p>
              <h1 className='text-4xl w-1/2 md:w-full lg:text-4xl md:text-5xl font-semibold'>
                {typeNew}
              </h1>
              <span className='flex items-center gap-2 text-lightGreen'>
                <p className='xs:text-base sm:text-lg md:text-2xl font-light'>
                  {title}
                </p>
              </span>
              <p className='xs:text-xs sm:h-[150px] py-4 text-sm md:text-base font-light text-text'>
                {texts}
              </p>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex flex-col gap-2'>
              <p className='text-text text-base md:text-lg'>
              // find my profile on Github:
              </p>
              <div className='text-base md:text-lg'>
                <span className=' text-purple'>const</span>
                <span className='text-lightGreen'> githubLink</span>
                <span className='text-white'> = </span>
                <a href='https://github.com/bavic9' className='text-orange hover:underline'>https://github.com/bavic9</a>
              </div>
            </div>
          </div>
          <div className='text-base md:text-lg'>
            <span className=' text-purple'>const</span>
            <span className='text-lightGreen'> resumeLink</span>
            <span className='text-white'> = </span>
            <a href='https://drive.google.com/file/d/1MkcC4gCsQo-iwks9mtFXqLQ7yIMyYPQF/view?usp=drive_link' className='text-orange hover:underline'>resume</a>
          </div>
        </div>
        <div className="hidden lg:block w-full h-[500px]">
          <ComputersCanvas />
        </div>
      </div>
    </section >
  );
};

export default Hero;
