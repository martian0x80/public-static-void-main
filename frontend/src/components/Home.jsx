import React from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../context/UserAuthContext.jsx";
import JobSection from "./jobs/JobSection.jsx";

const Home = () => {
    const {logOut, user} = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        if (await logOut()) window.location.reload();
    };
    return (
        <>
            <JobSection/>

            <Button variant="primary" onClick={handleLogout}>
                Log out
            </Button>

        </>
    );
};

export default Home;
