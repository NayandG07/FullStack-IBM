import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
    const [count, setCount] = useState(3); // Hook
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }
    const fetchUsers = () => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => { // Hook
        fetchData();
        fetchUsers();
    }, []);

    console.log(data);
    console.log(users);

    const handleIncrement = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the home page content.</p>
            <p>Count: {count}</p>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>

            {/* Products */}
            {/* <div>
                <h3>Fetched Data:</h3>
                {data.map((item) => (
                    <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                        <h4>{item.title}</h4>
                        <img src={item.image} alt={item.title} width="100" />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div> */}

            {/* Users */}
            <div>
                <h3>Fetched Users: </h3>
                {users.map((user) => (
                    <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                        <h4>{user.name.firstname} {user.name.lastname}</h4>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home

// State is plain javascript object that holds data for a component. It can be updated and re-rendered when the state changes. In React, state is managed using the useState hook in functional components or this.state in class components.