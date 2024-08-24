import React from 'react';
import { BiLogoDjango } from 'react-icons/bi';
import { FaJava, FaLaravel, FaNodeJs, FaPython, FaReact, FaVuejs } from 'react-icons/fa';
import { RiFlutterFill, RiNextjsLine } from 'react-icons/ri';
import { TbBrandKotlin } from 'react-icons/tb';

const Tech = () => {
    return (
        <div className='mt-28 max-w-7xl mx-auto'>
            <h2 className='text-4xl text-white font-bold text-center mb-8'>Our Tech Toolbox</h2>
            <p className='text-white text-center mb-20'>Empowering Innovation: Our Cutting-Edge Tech Toolbox</p>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-3 p-4'>
                <div className='space-y-3'>
                    <h3 className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Back-end</h3>
                    <p className='flex gap-2 items-center text-xl text-white'><FaLaravel className='text-green-500' />Laravel</p>
                    <p className='flex gap-2 items-center text-xl text-white'><FaNodeJs className='text-green-500' />Node.Js</p>
                    <p className='flex gap-2 items-center text-xl text-white'><FaJava className='text-green-500' />Java</p>
                    <p className='flex gap-2 items-center text-xl text-white'><FaPython className='text-green-500' />Python</p>
                    <p className='flex gap-2 items-center text-xl text-white'><BiLogoDjango className='text-green-500' />Django</p>
                </div>
                <div className='space-y-3'>
                    <h3 className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Front-end</h3>
                    <p className='flex gap-2 items-center text-xl text-white'><FaReact className='text-green-500' />React.Js</p>
                    <p className='flex gap-2 items-center text-xl text-white'><RiNextjsLine className='text-green-500' />Next.Js</p>
                    <p className='flex gap-2 items-center text-xl text-white'><FaVuejs className='text-green-500' />VUE.Js</p>
                </div>
                <div className='space-y-3'>
                    <h3 className='text-2xl text-white border-b border-slate-500 pb-4 mb-4'>Mobile</h3>
                    <p className='flex gap-2 items-center text-xl text-white'><RiFlutterFill className='text-green-500' />Flutter</p>
                    <p className='flex gap-2 items-center text-xl text-white'><TbBrandKotlin className='text-green-500' />Kotlin</p>
                    <p className='flex gap-2 items-center text-xl text-white'><FaNodeJs className='text-green-500' />React Native</p>
                </div>
            </div>
        </div>
    );
};

export default Tech; 