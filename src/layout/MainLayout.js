import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className='container'>
                <div className='containerInner'>
                    <Outlet />
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout