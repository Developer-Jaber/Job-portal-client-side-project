import { Link } from "react-router-dom"

const JobCard = ({ data }) => {
  const {
    _id,
    title,
    companyLogo,
    company,
    location,
    description,
    employment_type,
    posted_date
  } = data

 

  return (
    <div className='bg-white shadow-lg hover:shadow-2xl p-4 rounded-lg transition-shadow duration-300 card'>
      <div className='flex items-center mb-4'>
        <img
          src={companyLogo}
          alt={`${company} logo`}
          className='mr-4 rounded-full w-24 h-24'
        />
        <div>
          <h2 className='font-semibold text-xl card-title'>{title}</h2>
          <p className='text-gray-500'>{company}</p>
        </div>
      </div>
      <div className='mb-4'>
        <p className='text-gray-700 text-start'>{description}</p>
      </div>
      <div className='flex justify-between items-center'>
        <span className='badge badge-primary'>{location}</span>
        <Link to={`jobDetails/${_id}`} className='btn btn-outline btn-primary'>View Details</Link>
      </div>
    </div>
  )
}

export default JobCard
