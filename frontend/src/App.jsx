import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserAuthContextProvider} from "./context/UserAuthContext.jsx";
import Login from "./components/Login.jsx";
import axios from "axios";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import {GeoLocationContextProvider} from "./context/GeoLocationContext.jsx";

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
                                    <Home/>
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/" element={<Login/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                    </Routes>
                </BrowserRouter>
            </GeoLocationContextProvider>
        </UserAuthContextProvider>
    )
}

export default App
