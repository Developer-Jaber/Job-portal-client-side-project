import Lottie from "lottie-react"
import lottiSiginupData from "../assets/lottiSignup.json"
import { Link } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../Provider/ContextProvaider"

const SignUpPage = () => {

  const {createUser} = useContext(AuthContext);

  const handleCreateUser = (e) => {
      e.preventDefault()

      const form = e.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;

      const user = {name,photoURL,email,password}
      form.reset();

      createUser(email,password)
      .then(data=>{
        console.log(data.user);
      })
      .catch(error=>{
        console.log(error);
      })
  }
  return (
    <div className='bg-base-200 min-h-screen hero'>
      <div className='lg:flex-row-reverse flex-col hero-content'>
        <div className='text-center lg:text-left'>
          <h1 className='font-bold text-5xl'>Sign Up For free!</h1>
          <Lottie animationData={lottiSiginupData}></Lottie>
        </div>
        <div className='bg-base-100 shadow-2xl w-full max-w-sm card shrink-0'>
          <form onSubmit={handleCreateUser} className='card-body'>
          <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='name'
                placeholder='Enter you name'
                name="name"
                className='input-bordered input'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Photo URL</span>
              </label>
              <input
                type='photoURL'
                placeholder='Enter you photoURl'
                name="photoURL"
                className='input-bordered input'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                name="email"
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
                name="password"
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
                <Link to='/login_page' href='#' className='label-text-alt link link-hover'>
                  Alrady have an account?
                </Link>
              </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
