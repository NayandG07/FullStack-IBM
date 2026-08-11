import { Link } from 'react-router-dom';
import { ColorModeButton } from '@/components/ui/color-mode';

const Header = () => {
    return (
        <div>
            <h1>My App</h1>
            <nav style={{ backgroundColor: 'rgb(36, 31, 77)', padding: '10px' }}>
                <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/drawer">Drawer</Link></li>
                    <li><ColorModeButton /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;