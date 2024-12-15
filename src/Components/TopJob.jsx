import { useEffect, useState } from 'react'
import JobCard from './JobCard'

const TopJob = () => {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data)
      })
  }, [])


  return (
    <div className='bg-base-100 hero'>
      <div className='text-center hero-content'>
        <div className='max-w-7xl'>
          <h1 className='font-bold text-5xl'>Top Jobs of the Week</h1>
          <p className='py-6'>
            "Explore the most sought-after job opportunities currently
            available. These top jobs are handpicked based on demand, company
            reputation, and career growth potential. Don’t miss out on these
            exclusive positions—apply now to take your career to the next level
            with leading companies in your industry."
          </p>
          <section className='gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4'>
            {
                jobs.map(job=> <JobCard key={job._id} data={job}></JobCard>)
            }
          </section>
        </div>
      </div>
    </div>
  )
}

export default TopJob
