import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from '../Layout/HomeLayout'
import LoginPage from '../Page/LoginPage'
import SignUpPage from '../Page/SignUpPage'
import Home from '../Page/Home'
import JobDetails from '../Page/JobDetails'
import Private from '../Private/Private'
import Myapplication from '../Page/Myapplication'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login_page',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/signUp_page',
        element: <SignUpPage></SignUpPage>
      },
      {
        path: '/jobDetails/:id',
        element: <Private><JobDetails></JobDetails></Private>,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: '/my-application',
        element: <Private><Myapplication></Myapplication></Private>
      }
    ]
  }
])

const Router = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default Router
