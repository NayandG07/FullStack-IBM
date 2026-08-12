import { useEffect } from "react";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { Marquee } from "@chakra-ui/react";
import ButtonWithProp from "@/components/ButtonWithProp";

import {
    IoLogoFigma,
    IoLogoGitlab,
    IoLogoJavascript,
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoVimeo,
} from "react-icons/io5";

const marqueeItems = [
    { icon: IoLogoFigma, label: "Figma", color: "#F24E1E" },
    { icon: IoLogoTwitter, label: "Twitter", color: "#1da1f2" },
    { icon: IoLogoLinkedin, label: "LinkedIn", color: "#0077b5" },
    { icon: IoLogoGitlab, label: "GitLab", color: "#fc6d26" },
    { icon: IoLogoVimeo, label: "Vimeo", color: "#1ab7ea" },
    { icon: IoLogoJavascript, label: "JavaScript", color: "#f7df1e" },
];

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
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the home page content.</p>
            <p>Count: {count}</p>
            <ButtonWithProp label="Increment" onClick={handleIncrement} />
            <ButtonWithProp label="Decrement" onClick={handleDecrement} />

            {/* Marquee */}
            <Marquee.Root autoFill spacing="2rem" style={{ marginTop: '2rem' }}>
                <Marquee.Viewport>
                    <Marquee.Content>
                        {marqueeItems.map((item, i) => (
                            <Marquee.Item key={i} px="2rem">
                                {item.icon && (
                                    <item.icon
                                        size="3rem"
                                        aria-label={item.label}
                                        color={item.color}
                                    />
                                )}
                            </Marquee.Item>
                        ))}
                    </Marquee.Content>
                </Marquee.Viewport>
            </Marquee.Root>

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
                <h3 style={{ fontWeight: 'bold' }}>Fetched Users: </h3>
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