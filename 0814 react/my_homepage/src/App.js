import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Album from "./pages/Album";
import Game from "./pages/Game";
import Post from "./pages/Post";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    <Route index element={<Home></Home>}/>
                    <Route path='about' element={<About></About>}></Route>
                    <Route path='album' element={<Album></Album>}></Route>
                    <Route path='game' element={<Game></Game>}></Route>
                    <Route path='post' element={<Post></Post>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
