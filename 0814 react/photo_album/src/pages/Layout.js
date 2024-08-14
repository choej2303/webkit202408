import Heading from "../components/Heading";
import {Outlet} from "react-router-dom";

export default () => {
    return (
        <div>
            <Heading></Heading>
            <Outlet></Outlet>
        </div>
    )
}