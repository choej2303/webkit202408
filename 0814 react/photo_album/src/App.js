import {useState} from "react";
import './w3.css'
import Photo from "./Photo";

export default function App() {
    const [photoArr, setPhotoArr] = useState([{
        no: 1,
        img: './img/img.png',
        title: "5 Terre",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
        no: 2,
        img: './img/img_1.png',
        title: "Monterosso",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\""
    }, {
        no: 3,
        img: './img/img_2.png',
        title: "Vernazza",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\""
    }, {
        no: 4,
        img: './img/img_3.png',
        title: "Manarola",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\""
    }, {
        no: 5,
        img: './img/img_4.png',
        title: "Corniglia",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\""
    }, {
        no: 6,
        img: './img/img_5.png',
        title: "Riomaggiore",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\""
    },])

    return (<div className="w3-content">
        {photoArr.map((photo, index) => {
            return (
                <Photo
                    key={index}
                    photo={photo}>
                </Photo>
            )
        })}
    </div>)
}