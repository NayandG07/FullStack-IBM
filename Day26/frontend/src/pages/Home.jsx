const Home = () => {
    console.log('Home component rendered');
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the home page content.</p>
        </div>
    )
}

export default Home

// State is plain javascript object that holds data for a component. It can be updated and re-rendered when the state changes. In React, state is managed using the useState hook in functional components or this.state in class components.