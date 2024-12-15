import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import Home from "../Page/Home";


const HomeLayout = () => {
   
    return (
        <div>
            <header>
                <Navber></Navber> 
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;