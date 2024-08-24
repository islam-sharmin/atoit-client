import React, { useEffect, useState } from 'react';

const Works = () => {

    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/works')
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [])

    return (
        <div className='mt-28 max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <h2 className='text-4xl text-white font-bold text-center mb-2'>Our Works</h2>
                </div>
                <div role="tablist" className="tabs tabs-bordered md:gap-5">
                    <a role="tab" className="tab tab-active text-white lg:text-2xl">All</a>
                    <a role="tab" className="tab text-white lg:text-2xl">E-Commerce</a>
                    <a role="tab" className="tab text-white lg:text-2xl">HealthCare</a>
                    <a role="tab" className="tab text-white lg:text-2xl">News Portal</a>
                </div>
            </div>

            <div className='mt-20 grid gap-6 grid-cols-1 md:grid-cols-3 p-4'>
                {
                    works.map(work => <div key={work._id} className="card bg-base-100 image-full shadow-xl">
                        <figure>
                            <img
                                src={work.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <div className="card-actions justify-start">
                                <h2 className="card-title mt-48">{work.name}</h2>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='mt-8'>
                <button className='btn btn-ghost text-white'>See More</button>
            </div>
        </div>
    );
};

export default Works;