import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
// import Login from './components/Login/MainLogin.jsx'
import StudentSignup from './components/Signup/StudentSignup.jsx'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions.jsx'
import Career from './components/Career/Career.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import MainSignupPage from './components/Signup/MainSignup.jsx'
import AdminSignup from './components/Signup/AdminSignup.jsx'
import MainLoginPage from './components/Login/MainLogin.jsx'
import StudentLogin from './components/Login/StudentLogin.jsx'
import AdminLogin from './components/Login/AdminLogin.jsx'
import ProtectedRoute from './components/ProtectedRoutes.jsx'
import AdminLogout from './components/Logout/AdminLogout.jsx'
import StudentDashboard from './components/Dashboard/StudentDashboard.jsx'
import StudentDashboardProtectedRoute from './components/StudentDashboardProtectedRoute.jsx'
import StudentLogout from './components/Logout/StudentLogout.jsx'
import DeleteAccount from './components/ForgetPassword/studentForgetPassword.jsx'
import AdminDeleteAccount from './components/ForgetPassword/adminForgetPassword.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/career' element={<Career/>} ></Route>
      <Route path='/Login' element={<MainLoginPage/>} ></Route>
      <Route path='/StudentLogin' element={<StudentLogin/>} ></Route>
      <Route path='/AdminLogin' element={<AdminLogin/>} ></Route>
      <Route path='/signup' element={<MainSignupPage/>} ></Route>
      <Route path='/dashboard' 
      element={
      <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>
    } ></Route>
      <Route path='/AdminSignup' element={<AdminSignup/>} ></Route>
      <Route path='/StudentSignup' element={<StudentSignup/>} ></Route>
      <Route path='/terms' element={<TermsAndConditions/>}></Route>
      <Route path='/admin/logout' element={<AdminLogout/>} ></Route>
      <Route path='/student/dashboard' element={
        <StudentDashboardProtectedRoute>
          <StudentDashboard/>
          </StudentDashboardProtectedRoute>
        }>
      </Route>
      <Route path='/logout' element={<StudentLogout/>} ></Route>
      <Route path='/forget-password' element={<DeleteAccount/>}></Route>
      <Route path='/admin/forget-password' element={<AdminDeleteAccount/>} ></Route>
      



    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)