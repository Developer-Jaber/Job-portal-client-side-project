import Lottie from 'lottie-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import lottiLogindata from '../assets/lottiLogin.json'
import { FaGoogle } from 'react-icons/fa'
import AuthContext from '../Provider/ContextProvaider'
import { useContext } from 'react'

const LoginPage = () => {
  const { loginWithPopup, loginUser } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const from  = location.state || '/'
  

  const handlePopupLogin = () => {
    loginWithPopup()
  }

  const handleLogin = (e) => {
    e.preventDefault();
     const form = e.target;
     const email = form.email.value
     const password = form.password.value

    loginUser(email,password)
    .then(data=>{
      console.log(data.user);
      navigate(from)
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className='mx-auto w-10/12 min-h-screen hero'>
      <div className='lg:flex-row-reverse flex-col hero-content'>
        <div className='text-center lg:text-left'>
          <h1 className='font-bold text-5xl'>Login now!</h1>
          <Lottie animationData={lottiLogindata}></Lottie>
        </div>
        <div className='bg-base-100 shadow-2xl w-full max-w-sm card shrink-0'>
          <div className='form-control mx-5'>
            <label className='label'>
              <span className='mx-auto text-center label-text'>Email</span>
            </label>
            <button
              onClick={handlePopupLogin}
              className='border-2 shadow-lg py-5 rounded-lg'
            >
              <FaGoogle className='mx-auto'></FaGoogle>
            </button>
          </div>
          <form onSubmit={handleLogin} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input-bordered input'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input-bordered input'
                required
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>

            <label className='label'>
              <Link
                to='/signUp_page'
                href='#'
                className='label-text-alt link link-hover'
              >
                Sign Up?
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
