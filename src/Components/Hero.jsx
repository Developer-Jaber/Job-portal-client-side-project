import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div>
      <div className='min-h-96 hero'>
        <div className='lg:flex-row-reverse flex-col hero-content'>
          <div className='text-center'>
            <div className='flex gap-5 max-w-md'>
              <div>
                <motion.img 
                animate={{y: 50}}
                transition={{duration:6,repeat: Infinity}}
                className="rounded-lg" src='https://i.ibb.co/p4TzKBz/image.png' alt='' />
              </div>
              <div>
                <motion.img 
                animate={{y: -50}}
                transition={{duration:6,repeat: Infinity}}
                className="mt-20 rounded-lg" src='https://i.ibb.co/Rjf4D3k/image.png' alt='' />
              </div>
            </div>
          </div>
          <div >
            <div className='max-w-2xl'>
              <h1 className='font-bold text-5xl'>Find Your</h1>
              <motion.h1
              animate={{x: 100}}
              transition={{duration: 5,Infinity}}
               className='font-bold text-5xl'
               >
                Dream Job Today</motion.h1>
              <p className='py-6 text-start'>
                "Discover thousands of job opportunities tailored to your skills
                and aspirations. Join our community of professionals and take
                the next step in your career. Whether you're seeking a full-time
                position, part-time job, or freelance gig, our platform connects
                you with top employers in various industries. Start your job
                search now and unlock your potential."
              </p>
              <button className='text-center btn btn-primary'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
