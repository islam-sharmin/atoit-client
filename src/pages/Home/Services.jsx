import React from 'react';

const Services = () => {
    return (
        <div className='mt-28 max-w-7xl mx-auto'>
            <h2 className='text-4xl text-white font-bold text-center mb-8'>Our Services</h2>
            <p className='text-white text-center mb-20'>ATOIT is providing innovative and outstanding featured services <br /> in the digital marketplace</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 p-4'>
                <div>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Web Development</p>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Mobile App Development</p>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Product Design</p>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Cyber Security</p>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Digital Marketing</p>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Graphics & Motion Graphic Design</p>
                </div>
                <div>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>E-commerce solution</p>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Media Support</p>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>SEO Services</p>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Domain Hosting Services
                    </p>
                    <p className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>IT Consultancy Services</p>
                </div>
            </div>
        </div>
    );
};

export default Services;