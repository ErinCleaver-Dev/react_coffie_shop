import Notice from './Notice';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header_container">
            <Notice/>
            <Navbar/>
        </div>
    )
}

export default Header