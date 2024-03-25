import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/appliedJobs">Applied Jobs</NavLink>
        <NavLink to="/blog">blogs</NavLink>
    </>
    return (

            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-6 nav.a active items-center">
                            {/* dynamick link set */}
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 nav.a active items-center">
                        {/* dynamick link set */}
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary">Button</a>
                </div>
            </nav>
    );
};

export default Header;