import { useState } from "react";
import Link from "../Link/Link";
// import { FaBeer } from 'react-icons/fa';
import { TiThMenu} from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";



const NavBar = () => {
    const [open, setOpen]= useState(false)

    const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
    { id: 6, path: "/blog/:id", name: "Blog Details" },
    { id: 7, path: "/login", name: "Login" },
    { id: 8, path: "/register", name: "Register" },
    { id: 9, path: "/dashboard", name: "Dashboard" },
    { id: 10, path: "*", name: "Not Found" }
   ];

    return (
        <nav className="bg-orange-700 text-justify p-6">
            {/* <FaBeer></FaBeer> */}
            <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                {
                    open === true ?
                     <MdOutlineClose></MdOutlineClose> : <TiThMenu ></TiThMenu>
                }
                
            </div>
           <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-16' :'-top-60'} bg-orange-700 px-6 `}>
             {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;