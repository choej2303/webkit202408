import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <div className='container'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Layout