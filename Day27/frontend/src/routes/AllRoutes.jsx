import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default AllRoutes