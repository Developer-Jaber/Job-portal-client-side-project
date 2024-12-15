import logo from '../img/icons8-job-application-100.png'

const Footer = () => {
  return (
    <div className='bg-neutral'>
      <footer className='flex items-center px-5 pt-5'>
        <img src={logo} alt="" />
        <h1 className='font-bold text-3xl text-neutral-content'>Jobs Portal
        </h1>
      </footer>
      <footer className='p-10 text-neutral-content footer'>
        <nav>
          <h6 className='footer-title'>Services</h6>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer
