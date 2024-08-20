import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>준혁의 홈페이지</h1>
            <hr/>
            <nav>
                <Link to='/' className='header-link'>Home</Link>
                <Link to='post' className='header-link'>Post</Link>
                <Link to='about' className='header-link'>About</Link>
                <Link to='album' className='header-link'>Album</Link>
                <Link to='game' className='header-link'>Game</Link>
            </nav>
            <hr/>
        </div>
    )
}

export default Header