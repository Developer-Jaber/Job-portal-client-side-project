import { useContext } from 'react'
import {
  FaComment,
  FaFacebook,
  FaGooglePlay,
  FaPinterest,
  FaSave,
  FaTwitter
} from 'react-icons/fa'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import AuthContext from '../Provider/ContextProvaider'
import Swal from 'sweetalert2'


const JobDetails = () => {

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    _id,
    title,
    companyLogo,
    company,
    location,
    description,
    requirements,
    employment_type,
    benefits,
    posted_date
  } = useLoaderData()

  const handleAplictionSubmit = e => {
    e.preventDefault()

    const form = e.target
    const name = form.fullName.value
    const phoneNumber = form.phoneNumber.value
    const githubLink = form.githubLink.value
    const linkdinProfile = form.linkdinProfile.value
    const resumeLink = form.resumeLink.value
    const coverLetter = form.coverLetter.value

    form.reset();
    const jobApplicatin = {
      job_id: _id,
      applicant_email: user.email,
      name,
      githubLink,
      linkdinProfile,
      phoneNumber,
      resumeLink,
      coverLetter,
    }

    fetch('http://localhost:5000/job-applications',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(jobApplicatin)
    })
    .then(res=> res.json())
    .then(data=> {
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/my-application')
      }
    })
  }

  return (
    <div>
      <div className='bg-gray-100 p-8 min-h-screen'>
        <div className='bg-white shadow-lg mx-auto rounded-lg max-w-4xl overflow-hidden'>
          <div className='px-6'>
            <div className='flex justify-end gap-4'>
              <button className='my-5'>
                <FaSave className='text-3xl text-red-500'></FaSave>
              </button>
            </div>
            <div>
              <img
                className='mx-auto rounded-lg w-40 h-40'
                src={companyLogo}
                alt=''
              />
            </div>
            <h2 className='mb-4 font-bold text-3xl text-gray-800'>
              {title} || {company} || Date : {posted_date}
            </h2>
            <p className='text-gray-600 text-sm'>
              <span className='font-semibold text-orange-500'>Features</span> |
              By {company} | Contributions from{' '}
              <span className='font-semibold text-orange-500'>
                GamesRadar Staff
              </span>{' '}
              published 2 days ago
            </p>
            <p className='mt-2 text-gray-700'>{description}</p>

            <div className='flex space-x-2 my-4'>
              <Link to='/' className='text-blue-500'>
                <FaFacebook></FaFacebook>
              </Link>
              <Link to='/' className='text-red-500'>
                <FaPinterest></FaPinterest>
              </Link>
              <Link to='/' className='text-black'>
                <FaTwitter></FaTwitter>
              </Link>
              <Link to='/' className='text-gray-500'>
                <FaGooglePlay></FaGooglePlay>
              </Link>
              <Link to='/' className='text-orange-500'>
                <FaComment></FaComment>
              </Link>
            </div>
            <p>
              <span className='font-semibold text-lg'>Location :</span>{' '}
              {location}
            </p>
            <p>
              <span className='font-semibold text-lg'>Employment Type :</span>{' '}
              {employment_type}
            </p>
            <span className='font-semibold text-lg underline'>
              Requirements :
            </span>
            <ul className='ml-5'>
              {requirements.map((li, indx) => (
                <li key={indx} className='list-decimal'>
                  {li}
                </li>
              ))}
            </ul>
            <span className='font-semibold text-lg underline'>benefits :</span>
            <ul className='ml-5'>
              {benefits.map((li, indx) => (
                <li key={indx} className='list-decimal'>
                  {li}
                </li>
              ))}
            </ul>
            <p className='mt-2 text-gray-600 text-lg'>
              <label htmlFor='my_modal_6' className='flex my-8 btn btn-primary'>
                Apply Now
              </label>
            </p>
          </div>
        </div>
      </div>

      <input type='checkbox' id='my_modal_6' className='modal-toggle' />
      <div className='modal' role='dialog'>
        <div className='modal-box'>
          <div className='bg-base-200 shadow-lg mx-auto p-4 rounded-lg max-w-lg'>
            <h1 className='mb-4 font-bold text-2xl'>Apply for Job</h1>
            <form onSubmit={handleAplictionSubmit}>
              <div className='mb-4'>
                <label
                  className='block mb-1 font-medium text-sm'
                  htmlFor='fullName'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  // value={formData.fullName}
                  // onChange={handleChange}
                  className='input-bordered w-full input'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block mb-1 font-medium text-sm'
                  htmlFor='phoneNumber'
                >
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phoneNumber'
                  name='phoneNumber'
                  // value={formData.phoneNumber}
                  // onChange={handleChange}
                  className='input-bordered w-full input'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block mb-1 font-medium text-sm'
                  htmlFor='linkdinProfile'
                >
                  Linkdin Profile
                </label>
                <input
                  type='url'
                  id='linkdinProfile'
                  name='linkdinProfile'
                  // value={formData.githubLink}
                  // onChange={handleChange}
                  className='input-bordered w-full input'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block mb-1 font-medium text-sm'
                  htmlFor='githubLink'
                >
                  GitHub Link
                </label>
                <input
                  type='url'
                  id='githubLink'
                  name='githubLink'
                  // value={formData.githubLink}
                  // onChange={handleChange}
                  className='input-bordered w-full input'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block mb-1 font-medium text-sm'
                  htmlFor='resumeLink'
                >
                  Resume Link
                </label>
                <input
                  type='url'
                  id='resumeLink'
                  name='resumeLink'
                  // value={formData.resumeLink}
                  // onChange={handleChange}
                  className='input-bordered w-full input'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block mb-1 font-medium text-sm'
                  htmlFor='coverLetter'
                >
                  Cover Letter
                </label>
                <textarea
                  id='coverLetter'
                  name='coverLetter'
                  // value={formData.coverLetter}
                  // onChange={handleChange}
                  className='textarea-bordered w-full textarea'
                  rows='4'
                ></textarea>
              </div>
              <div className='flex justify-center'>
                <div className='items-center modal-action'>
                  <label className='bg-slate-300 shadow-sm p-3 rounded-lg' htmlFor='my_modal_6'>Cancel</label>
                  <button className='btn btn-primary'>
                    <label htmlFor='my_modal_6'>Submit</label>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
