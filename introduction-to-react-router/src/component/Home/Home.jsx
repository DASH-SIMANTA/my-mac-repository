import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log('Current location:', location);
    // The useLocation hook is used to access the current location object
    // It provides information about the current URL, including the pathname,
    // search parameters, and hash fragment.        
    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading' ? 
                <p>Loading...</p>:<Outlet></Outlet>
            }
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;