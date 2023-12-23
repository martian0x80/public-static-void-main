import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserAuthContextProvider} from "./context/UserAuthContext.jsx";
import Login from "./components/Login.jsx";
import axios from "axios";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import {GeoLocationContextProvider} from "./context/GeoLocationContext.jsx";
import Index from "./components/Index.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080/"

    return (
        <UserAuthContextProvider>
            <GeoLocationContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/home"
                            element={
                                <ProtectedRoute>
                                    <><Header/><Home/><Footer/></>
                                </ProtectedRoute>
                            }
                        />
                        <Route path={"/"} index element={<><Header/><Index/><Footer/></>} />
                        <Route path="/signin" element={<><Header/><Login/><Footer/></>}/>
                        <Route path="/signup" element={<><Header/><Signup/><Footer/></>}/>
                    </Routes>
                </BrowserRouter>
            </GeoLocationContextProvider>
        </UserAuthContextProvider>
    )
}

export default App
