import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar({isOpen, setIsOpen}) {

  const handleClick=(e)=>{
    e.stopPropagation()
    setIsOpen(!isOpen)
  }
    
  return (
    <nav className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 text-white py-5 px-4 md:px-8 flex justify-between items-center relative shadow-md z-20">
      <Link to='/' className="md:text-3xl text-lg font-bold">My Dashboard</Link>
      <div className="md:flex text-md font-medium hidden space-x-4">
            <NavLink to='/' className="hover:text-blue-300 transition">Profile</NavLink>
            <NavLink to='/experience' className="hover:text-blue-300 transition">Experience</NavLink>
            <NavLink to='/skills' className="hover:text-blue-300 transition">Skills</NavLink>
            <NavLink to='/extras' className="hover:text-blue-300 transition">Extras</NavLink>
      </div>
      <div className="md:hidden">
        <button onClick={(e) => handleClick(e)} id="menu-btn" className="focus:outline-none">
         <GiHamburgerMenu />

        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 md:top-18 md:hidden right-3 bg-gray-700 rounded-md shadow-lg p-4 space-y-2 z-10 w-40 transition-opacity duration-300 ease-out opacity-100 transform translate-x-0">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-300 transition">Profile</Link>
          <Link to="/experience" onClick={() => setIsOpen(false)} className="block hover:text-blue-300 transition">Experience</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="block hover:text-blue-300 transition">Skills</Link>
          <Link to="/extras" onClick={() => setIsOpen(false)} className="block hover:text-blue-300 transition">Extras</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
