import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        alert('Form submitted successfully!');
        toast.success("okkkkkkk")
    };

    return (
        <>
            <div
                name="Contact"
                className="max-w-screen-3xl w-full container mx-auto px-4 md:px-20 my-16"
            >
                <Toaster/>
                <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
                <span>Kindly fill out the below form to contact me</span>

                <div className="flex flex-col items-center justify-center mt-5">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-slate-300 w-96 px-8 py-6 rounded-xl"
                    >
                        <h1 className="font-semibold text-xl">Send Your Message</h1>

                        {/* Full Name */}
                        <div className="flex flex-col mt-4">
                            <label htmlFor="name" className="text-gray-700 font-bold">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight"
                                placeholder="Enter Your Name"
                                id="name"
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col mt-4">
                            <label htmlFor="email" className="text-gray-700 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight"
                                placeholder="Enter Your Email"
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Enter a valid email address',
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Comment */}
                        <div className="flex flex-col mt-4">
                            <label htmlFor="comment" className="text-gray-700 font-bold">
                                Comment
                            </label>
                            <textarea
                                type="text"
                                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-8"
                                placeholder="Enter Your Comment"
                                id="comment"
                                {...register('comment', {
                                    required: 'Comment is required',
                                    minLength: {
                                        value: 10,
                                        message: 'Comment must be at least 10 characters long',
                                    },
                                })}
                            />
                            {errors.comment && (
                                <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 my-4 rounded hover:bg-slate-700 hover:duration-200"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
