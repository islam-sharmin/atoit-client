import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const newContact = {name, email, message}
        console.log(newContact);

        // send data to the server
        fetch('http://localhost:5000/contacts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newContact)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Message Sent Successfully',
                        icon: 'success',
                        confirmButtonText: 'Awesome'
                      })
                }
            })
        form.reset();
    }

    return (
        <div className='bg-gray-950 max-w-7xl mx-auto'>
            <div className="md:pt-14 md:pb-14">
                <div className="hero-content bg-slate-900 flex-col gap-8 md:flex-row rounded-xl p-5">
                    <div className="text-center text-white lg:text-left md:pl-6 mx-auto">
                        <h1 className="text-3xl lg:text-5xl font-bold">Let s connect <br />
                            and start the <br />
                            conversation!</h1>
                        <p className="py-2 md:py-6">
                            Got something on your mind? Whether you're itching to ask questions, ready to brainstorm on a project, or just fancy a chat about design, I'm all ears! Drop me a line and let's get the conversation flowing!
                        </p>
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl mr-4">
                        <form onSubmit={handleForm} className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Name" name='name' className="input input-bordered border-white bg-gray-800 text-white" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Email" name='email' className="input input-bordered border-white bg-gray-800 text-white" required />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea textarea-bordered border-white bg-gray-800 text-white" placeholder="Message" name='message'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-ghost border border-white bg-gray-800 text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;