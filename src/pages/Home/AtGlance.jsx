import React from 'react';

const AtGlance = () => {
    return (
        <div className='mt-28 max-w-7xl mx-auto'>
            <h2 className='text-4xl text-white font-bold text-center mb-20'>At a Glance</h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-4 p-4'>
                <div className="card shadow-xl border border-white">
                    <div className="card-body text-white">
                        <h2 className="card-title text-7xl font-bold">10+</h2>
                        <p className='text-xl font-semibold'>Successfully Finished Projects</p>

                    </div>
                </div>
                <div className="card shadow-xl border border-white">
                    <div className="card-body text-white">
                        <h2 className="card-title text-5xl font-bold">10+</h2>
                        <p className='text-xl font-semibold'>Successfully Finished Projects</p>

                    </div>
                </div>

                <div className="card shadow-xl border border-white">
                    <div className="card-body text-white">
                        <h2 className="card-title text-5xl font-bold">10+</h2>
                        <p className='text-xl font-semibold'>Successfully Finished Projects</p>

                    </div>
                </div>

                <div className="card shadow-xl border border-white">
                    <div className="card-body text-white">
                        <h2 className="card-title text-5xl font-bold">10+</h2>
                        <p className='text-xl font-semibold'>Successfully Finished Projects</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtGlance;