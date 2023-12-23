import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {useUserAuth} from "../context/UserAuthContext.jsx";
import {useGeoLocation} from "../context/GeoLocationContext.jsx";
import Paginator from "./Paginator.jsx";
import SingleJobs from "./jobs/SingleJobs.jsx";
import axios from "axios";
import LoadSkeleton from "./Skeleton.jsx";
import CreatePost from "./jobs/CreatePost.jsx";

const Home = () => {
    const {logOut, user} = useUserAuth();
    const [jobs, setJobs] = useState([]);
    const [totalJobs, setTotalJobs] = useState(0);
    const [display, setDisplay] = useState("block");

    const [page, setPage] = useState(1);
    const geoLocation = useGeoLocation();

    useEffect(() => {
        axios.get(`/api/jobs/getJobs?page=${page}`)
            .then((res) => res.data)
            .then((data) => {
                setJobs(data.jobs);
                setTotalJobs(data.totalJobs);
            })
    }, [page]);

    const handleLogout = async () => {
        if (await logOut()) window.location.reload();
    };
    if (!geoLocation)
    return (<LoadSkeleton />)
    else
    return (
        <div className={"container"}>
            <div className={"m-3 flex"}>
                <Paginator page={page} setPage={setPage} count={Math.ceil(totalJobs/10)} />
                <div className={"flex-grow"}></div>
                <Button variant="primary" onClick={handleLogout}>
                    Create Job Post
                </Button>
                &nbsp;
                <Button variant="primary" onClick={handleLogout}>
                    Log out
                </Button>
            </div>
            <CreatePost
                display={display}
                geoLong={geoLocation.longitude}
                geoLat={geoLocation.latitude}
            />
            <div className='text-center'>
                <div className="grid md:grid-cols-2 gap-6 ">
                    {
                        jobs.map((job, idx) => <SingleJobs
                            key={idx + 1}
                            job={job}
                            currentLong={geoLocation.longitude}
                            currentLat={geoLocation.latitude}
                        ></SingleJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
