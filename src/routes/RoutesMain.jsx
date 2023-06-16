import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import { useEffect, useState } from "react"

export const RoutesMain = () => {
    const [user,setUser] = useState({});

    useEffect(() => {
        console.log(user)
    },[user])

    return(
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage user={user} />} />
        </Routes>
    )
}