import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions.jsx'
import Career from './components/Career/Career.jsx'

import AdminSignup from './components/Signup/AdminSignup.jsx'

import StudentLogin from './components/Login/StudentLogin.jsx'
import AdminLogin from './components/Login/AdminLogin.jsx'
import ProtectedRoute from './components/ProtectedRoutes.jsx'
import AdminLogout from './components/Logout/AdminLogout.jsx'
import StudentDashboard from './components/Dashboard/StudentDashboard.jsx'
import StudentDashboardProtectedRoute from './components/StudentDashboardProtectedRoute.jsx'
import StudentLogout from './components/Logout/StudentLogout.jsx'

import AdminDeleteAccount from './components/ForgetPassword/adminForgetPassword.jsx'
import AddStudent from './components/StudentDetails/AddStudent.jsx'
import GetUniqueStudent from './components/StudentDetails/getUniqueStudent.jsx'
import GetAllStudents from './components/StudentDetails/getAllStudents.jsx'
import UploadMaterial from './components/Dashboard/UploadMaterial.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import './i18n.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/career' element={<Career/>} ></Route>
      <Route path='/StudentLogin' element={<StudentLogin/>} ></Route>
      <Route path='/AdminLogin' element={<AdminLogin/>} ></Route>
      <Route path='/uploadMaterial' element={<ProtectedRoute><UploadMaterial/></ProtectedRoute>} ></Route>
      <Route path='/addStudent' element={<ProtectedRoute><AddStudent/></ProtectedRoute>}></Route>
      <Route path='/AdminSignup' element={<AdminSignup/>} ></Route>
      <Route path='/terms' element={<TermsAndConditions/>}></Route>
      <Route path='/admin/logout' element={<AdminLogout/>} ></Route>
      <Route path='/student/dashboard' element={<StudentDashboardProtectedRoute><StudentDashboard/></StudentDashboardProtectedRoute>}></Route>
      <Route path='/logout' element={<StudentLogout/>} ></Route>
      <Route path='/admin/forget-password' element={<AdminDeleteAccount/>} ></Route>
      <Route path='/getUniqueStudent' element={<ProtectedRoute><GetUniqueStudent/></ProtectedRoute>}></Route>
      <Route path='/getAllStudent' element={<ProtectedRoute><GetAllStudents/></ProtectedRoute>}></Route>
      <Route path='/dashboard' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}></Route>
     </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)