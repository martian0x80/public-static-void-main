import React, { useEffect, useState } from 'react';
import SingleJobs from "./SingleJobs.jsx";

const JobSection = () => {
    const [jobs, setJobs] = useState([]);
    const [seeAll, setAll] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setJobs(data))
    }, []);

    return (
        <div className='text-center'>
            <div className="grid md:grid-cols-2 gap-6 ">
                {/* featured job card */}
                {
                    seeAll ?
                        jobs.map((job, idx) => <SingleJobs
                            key={idx + 1}
                            job={job}
                        ></SingleJobs>)
                        : jobs.slice(0, 4).map((job, idx) => <SingleJobs
                            key={idx + 1}
                            job={job}
                        >
                        </SingleJobs>)
                }
            </div>
            {/*{*/}
            {/*    seeAll ?*/}
            {/*        // seeAll === true ?*/}
            {/*        <button onClick={() => setAll(!seeAll)} className='custom-btn mt-6'>Show Less</button>*/}
            {/*        : <button onClick={() => setAll(!seeAll)} className='custom-btn mt-6'>Show All</button>*/}
            {/*}*/}
        </div>
    );
};

export default JobSection;