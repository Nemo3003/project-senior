import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import About from './components/About';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import News from './components/News';
import Investors from './components/Investos';
import {ContactUs} from './components/Contact'
import Login from './components/Auth/Login'
import RegisterClass from './components/Auth/RegisterClass';
import AppCard from './components/Courses/Courses';
import Welcome from './components/Institution/Welcome';
import Student from './components/Institution/Student';
import {Auth0Provider} from '@auth0/auth0-react';
import CheckCourse from './components/Courses/CheckCourse';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Upload from './components/Student/upload'
import ListStuCla from './components/Admin/ListStuCla';

import AdminDashboard from './components/Admin/AdminDashboard';
import PaymentPage from './components/Courses/PaymentPage';
import ChatbotPage from "./components/Chatbot/Chatbot";
import AddClasses from './components/Courses/AddClasses';
import SeeStudents from './components/Admin/SeeStudents';
import AddUsClass from './components/Admin/AddUsClass';


 
function App() {
  return (
    <Auth0Provider 
    domain='dev-nd67wypi0pti2u8w.us.auth0.com' 
    clientId="PuYLeAHFHntWxxNFa3pMWftGq80Q66hP" 
    redirectUri={window.location.origin}>
      
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<div><Hero /><Reviews /></div>} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/news" element={<News />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reclass" element={<RegisterClass />} />
        <Route path="/courses" element={<AppCard />} />
        <Route path="/institution" element={<Welcome />} />
        <Route path="/student" element={<Student />} />
        <Route path="/check" element={<CheckCourse />} />
        <Route path="/test" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/stuclass" element={<ListStuCla />} />
         {/**Admin stuff */}
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/add-classes' element={<AddClasses/>}/>
        <Route path='/see-students' element={<SeeStudents/>}/>
        <Route path='/setclass' element={<AddUsClass/>}/>
      </Routes>
      <ChatbotPage/>
      <Footer />
    </Router>
    </Auth0Provider>
  );
}

export default App;
