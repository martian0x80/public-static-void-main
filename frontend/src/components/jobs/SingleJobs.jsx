import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import "./singleJob.css"

const SingleJobs = ({ job, currentLong, currentLat }) => {
    const { jobId ,jobTitle, companyURL, company, salary, freq, jobType, duration, geoLat, geoLong, distance} = job;
    return (
        <div>
            <div className='mx-auto border-2 rounded-xl items-center p-4 bg-slate-200'>
                <div className='gap-4 items-center'>
                    <div className="image p-2">
                        <img src={companyURL} className='w-36'
                            alt="" />
                    </div>
                    <div className="details text-start p-2">
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-lg font-bold'>{jobTitle}</h1>
                                <p className='mb-2'>{company}</p>
                            </div>
                            <div>
                                <button className='border-2 px-6 py-2 bg-white rounded-lg mb-4'>{jobType}</button>
                            </div>
                        </div>
                        <div className='md:flex align-items-end'>
                            <p className='flex items-center mr-6'>
                                <MapPinIcon className="h-6 w-6 text-blue-500" />
                                {distance} KM
                            </p>
                            <p className='flex items-center justify-content-between mt-2 md:mt-0'>
                                <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                                Salary : {salary}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/details/${jobId}`}  className='custom-btn mt-4 w-full '>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleJobs;