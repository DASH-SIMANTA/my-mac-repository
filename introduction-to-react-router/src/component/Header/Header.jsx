import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <span>My Website</span>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
                {/* <NavLink to='/users' className={({ isActive }) => isActive ? 'active' : undefined}>Users</NavLink> */}
            </nav>
           
        </div>
    );
};

export default Header;