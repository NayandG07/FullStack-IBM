import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>My App</h1>
            <nav style={{ backgroundColor: 'rgb(36, 31, 77)', padding: '10px' }}>
                <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;