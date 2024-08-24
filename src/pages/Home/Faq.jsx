import React from 'react';

const Faq = () => {
    return (
        <div className='mt-28 max-w-7xl mx-auto'>
            <h2 className='text-4xl text-white font-bold text-center mb-8'>Frequently Asked Questions</h2>
            <p className='text-white text-center ml-48 mb-20'>If not find here, check your help center</p>

            <div className='p-4'>
                <div className="collapse collapse-arrow bg-gray-800 text-white mb-4">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium"> What services do you offer?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-800 text-white mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What is your software development process</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-800 text-white mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What are your pricing models?
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gray-800 text-white mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How long does it take to develop a software application?
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;