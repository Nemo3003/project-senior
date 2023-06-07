import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import About from './components/About';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import News from './components/News';
import Investors from './components/Investos';
import { ContactUs } from './components/Contact';
import RegisterClass from './components/Auth/RegisterClass';
import AppCard from './components/Courses/Courses';
import Welcome from './components/Institution/Welcome';
import Student from './components/Institution/Student';
import CheckCourse from './components/Courses/CheckCourse';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ListStuCla from './components/Admin/ListStuCla';
import Home from './components/Home';
import AdminDashboard from './components/Admin/AdminDashboard';
import PaymentPage from './components/Courses/PaymentPage';
import ChatbotPage from './components/Chatbot/Chatbot';
import AddClasses from './components/Courses/AddClasses';
import SeeStudents from './components/Admin/SeeStudents';
import AddUsClass from './components/Admin/AddUsClass';
import { UserContext } from './components/Auth/UserContext';
import FirebaseUpload from './components/FirebaseUpload';
import UploadedFiles from './components/Admin/UploadedFiles';
import WelcomeStudent from './components/Student/WelcomeStudent';
import AuthCourses from './components/Courses/AuthCourses';
import ErrorMessage from './components/Student/ErrorMessage';
import NotAdmin from './components/Admin/NotAdmin';


function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [imageCount, setImageCount] = useState();

  
  return (
    <UserContext.Provider value={{ isAdmin, setIsAdmin, isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Header />
        
          <Routes>
            <Route path="/" element={<div><Hero /><Reviews /></div>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/news" element={<News />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/institution" element={<Welcome />} />
            <Route path="/courses" element={<AppCard />} />
            <Route path="/not-admin" element={<NotAdmin/>} />
            <Route path="/error" element={<ErrorMessage />} />
            {/**Authenticated only */}
            <Route path="/*" element={<AuthenticatedRoutes />} />

            <Route path="/admin/*" element={<AdminProtectedRoutes />} />
          </Routes>
        
        <ChatbotPage />
        <Footer />
      </Router>
      </UserContext.Provider>
  );
}

//TODO: make so that if the user is not logged in, they cannot see the "I have a ticket"

function AdminProtectedRoutes() {
  const { isAdmin } = useContext(UserContext);

  if (!isAdmin) {
    return (<Navigate to="/not-admin"/>)
  }
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/add-classes" element={<AddClasses />} />
      <Route path="/see-students" element={<SeeStudents />} />
      <Route path="/setclass" element={<AddUsClass />} />
      <Route path="/stuclass" element={<ListStuCla />} />
      <Route path="/upload" element={<UploadedFiles />} />
    </Routes>
  );
}

function AuthenticatedRoutes () {

  const { isAuthenticated } = useContext(UserContext);

  if (!isAuthenticated) {
    return (<Navigate to="/error" />)
  }

  return(
    <Routes>
      <Route path="/welcome" element={<WelcomeStudent />} />
      <Route path="/reclass" element={<RegisterClass />} />
      <Route path="/auth-class" element={<AuthCourses />} />
      <Route path="/student" element={<Student />} />
      <Route path="/check" element={<FirebaseUpload />} />
      <Route path="/home" element={<Home />} />
      <Route path="/upload" element={<FirebaseUpload />} />
      <Route path="/admin/*" element={<AdminProtectedRoutes />} />
    </Routes>
  )
  
}

export default App;