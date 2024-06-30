import { NavLink } from "react-router-dom";
// import './Header.css';

const Header = () => {
  const activeLink = 'text-[#FF444A] border-b border-b-[#FF444A] rounded-none '
  const normalLink = 'text-black'

  const link = <>
    <span className="flex justify-center items-center p-2 text-lg">
    <NavLink to="/" className={({isActive}) => isActive ? activeLink:normalLink}>Home</NavLink>
    </span>
    <span className="flex justify-center items-center p-2 text-lg mx-2">
    <NavLink to="/donation" className={({isActive}) => isActive ? activeLink:normalLink} >Donation</NavLink>
    </span>
    <span className="flex justify-center items-center p-2 text-lg">
    <NavLink to="/statistics" className={({isActive}) => isActive ? activeLink:normalLink}>Statistics</NavLink>
    </span>
    
    </>

  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><img className="h-12" src="https://i.ibb.co/jhgpgP3/Logo.png" alt="" srcSet="" /></a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
      </div>   
    </div>
  );
};

export default Header;