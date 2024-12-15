import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Provider/ContextProvaider'
import logo from '../img/icons8-job-application-100.png'

const Navber = () => {
  const link = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/latest_news'>Laest News</Link>
      </li>
      <li>
        <Link to='/my-application'>My Application</Link>
      </li>
    </>
  )

  const { user, signout } = useContext(AuthContext)

  const handleSignOut = () => {
    signout()
  }

  return (
    <div>
      <div className='bg-base-100 mx-auto w-10/12 navbar'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='lg:hidden btn btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm'
            >
              {link}
            </ul>
          </div>
          <a className='flex items-center gap-3'>
            <img src={logo} className='w-16' alt="" />
            <span className='font-bold text-3xl'>Jobs Portal</span>
          </a>
        </div>
        <div className='lg:flex hidden navbar-center'>
          <ul className='px-1 menu menu-horizontal'>{link}</ul>
        </div>
        <div className='navbar-end'>
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input-bordered w-24 md:w-auto input'
            />
          </div>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='avatar btn btn-circle btn-ghost'
            >
              <div className='rounded-full w-10'>
                <img
                  alt={user && user?.displayName}
                  src={user && user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm'
            >
              {user && user?.email ? (
                <>
                  {' '}
                  <li>
                    <Link className='justify-between'>
                      Profile
                      <span className='bg-blue-400 badge'>New</span>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>Logout</button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to='/login_page' className='justify-between'>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navber
