import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const AdminNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/admin" className="text-white font-bold text-xl">Admin Dashboard</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link to="/courses" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500">See Classes</Link>
              <Link to="/add-classes" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500">Add Classes</Link>
              <Link to="/see-students" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500">See Students</Link>
              <Link to="/setclass" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-500">Assign classes</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:text-white transition duration-150 ease-in-out">
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <Link to="/add-classes" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500 transition duration-150 ease-in-out">Add Classes</Link>
          <Link to="/see-students" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500 transition duration-150 ease-in-out">See Students</Link>
          <Link to="/setclass" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500 transition duration-150 ease-in-out">Assign classes</Link>
        </div>
      </div>
    </nav>
  )
}

export default AdminNav