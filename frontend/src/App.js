import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router,Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import SigneUp from "./components/signeUp/Registre"
import AdminHome from "./AdminPage/MasterLayout/MasterLayout"
import AdminPrivateRoutes from "./AdminPage/AdminPrivateRoutes"
import AdminProfile from './AdminPage/components/profil/Profile'
import EnseignantIndex from "./AdminPage/components/ListeD'utilisateurs/EnseignantIndex"
import EtudiantIndex from "./AdminPage/components/ListeD'utilisateurs/EtudiantIndex"
import AddUser from "./AdminPage/components/ListeD'utilisateurs/AjouterUtilisateur"

import EnseignantPrivateRoutes from "./EnseignantPage/EnseignantPrivateRoutes"
import EnseignantHome from './EnseignantPage/MasterLayout/MasterLayout'
import EtudiantPrivateRoutes from './EtudiantPage/EtudiantPrivateRoutes'
import EtudiantHome from './EtudiantPage/MasterLayout/MasterLayout'
import axios from 'axios';
import Dashboard from "./EnseignantPage/components/dashboard/Dashboard"
import AddQcm from "./EnseignantPage/components/QCM/AddQcm"
import Qcm from "./EnseignantPage/components/QCM/Qcm"
import Formation from "./EnseignantPage/components/formation/Formation"
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
  const token =   localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        
         <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/courses' element={<CourseHome/>} />
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/journal' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/Login' element={<Login/>} />
          <Route exact path='/Registre' element={<SigneUp/>} />
  

          <Route element={<AdminPrivateRoutes/>}>
              <Route path="/admin" element={<AdminHome />} >
                <Route path="/admin/profile" element={<AdminProfile />} /> 
                <Route path="/admin/etudiant_list" element={<EtudiantIndex />} />               
                <Route path="/admin/enseignant_list" element={<EnseignantIndex />} />               
                <Route path="/admin/add_user" element={<AddUser/>} />               

              </Route>

          </Route>

          <Route element={<EnseignantPrivateRoutes/>}>
              <Route path="/enseignant" element={< EnseignantHome/>} >
                <Route path="/enseignant/dashboard" element={< Dashboard/>} />
                <Route path="/enseignant/profile" element={< AdminProfile/>} />
                <Route path="/enseignant/add_qcm" element={< AddQcm/>} />
                <Route path="/enseignant/liste_qcm" element={< Qcm/>} />
                <Route path="/enseignant/liste_formation" element={< Formation/>} />

                

              </Route>

          </Route>

          <Route element={<EtudiantPrivateRoutes/>}>
              <Route path="/etudiant" element={< EtudiantHome/>} >


              </Route>

          </Route>
         
          
           </>
    )
)
  return (
    <>
         
         
        <RouterProvider router ={router} />

    </>
  )
}

export default App
