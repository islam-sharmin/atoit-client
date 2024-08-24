import React from 'react';
import { FaFacebookSquare, FaInstagram, FaRegMap } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiPhoneCall, FiSend } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='bg-slate-900 pt-10'>
            <div className='w-[90%] mx-auto'>
            <footer className="footer p-5 md:p-10 text-white">
                <nav>
                    <h6 className="text-white text-4xl font-bold mb-12">ATOIT</h6>
                    <a className="link link-hover flex gap-2 items-center"><FaRegMap />Aftabnagar, Dhaka, Bangladesh</a>
                    <a className="link link-hover flex gap-2 items-center"><MdOutlineMailOutline />hello@atoit.net</a>
                    <a className="link link-hover flex gap-2 items-center"><FiPhoneCall />+8801837200802</a>
                </nav>
                <nav className='mt-12'>
                    <a className="link link-hover text-lg">About</a>
                    <a className="link link-hover text-lg">Blogs</a>
                    <a className="link link-hover text-lg">Careers</a>
                    <a className="link link-hover text-lg">FAQ</a>
                </nav>
                <form>
                    <h6 className="text-white text-2xl">Follow US on</h6>
                    <div className='flex gap-6 items-center mt-4 mb-4'>
                        <a className="link link-hover"><FaXTwitter className='text-2xl' /></a>
                        <a className="link link-hover"><FaFacebookSquare className='text-2xl' /></a>
                        <a className="link link-hover"><FaInstagram className='text-2xl' /></a>
                    </div>
                    <fieldset className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Subscribe for our Newsletter</span>
                        </label>
                        <div className="join w-1/2 md:w-2/3">
                            <input
                                type="text"
                                placeholder="johndoe@mail.com"
                                className="input input-bordered join-item" />
                            <button className="btn join-item"><FiSend className='text-xl' /></button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            
            <div className='bg-slate-900 pt-6'>
            <footer className="footer footer-center text-white p-4 border-t border-slate-500 w-1/2 mx-auto">
                <aside>
                    <p>All rights reserved © {new Date().getFullYear()}</p>
                </aside>
            </footer>
            </div>
        </div>
        </div>
    );
};

export default Footer;