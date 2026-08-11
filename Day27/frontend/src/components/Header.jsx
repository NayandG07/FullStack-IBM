const Header = () => {
    return (
        <div>
            <h1>My App</h1>
            <nav style={{ backgroundColor: '#f2f2f2', padding: '10px' }}>
                <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;