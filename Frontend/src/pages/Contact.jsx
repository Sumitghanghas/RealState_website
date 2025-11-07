import React, { useState } from 'react';


function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };



    return (
        <section className="px-6 py-20 bg-gradient-to-br from-gray-900 to-gray-500 text-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">
                    <span className="white">Let’s Connect</span>
                </h2>
                <p className="text-gray-400 mb-10">
                    Have a question or want to schedule a visit? Fill out the form and we’ll get back to you shortly.
                </p>

                <div className="bg-white shadow-xl rounded-xl p-8">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className="border-gray-300 text-black rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className=" border-gray-300 text-black rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="border-gray-300 text-black rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="border-gray-300 text-black rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                        />
                        <textarea
                            placeholder="Your Message"
                            required
                            rows="4"
                            className="md:col-span-2 border-gray-300 text-black rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-700 resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="md:col-span-2 bg-cyan-700 text-white py-3 rounded-md font-semibold hover:bg-cyan-600 transition"
                        >
                            {submitted ? 'Message Sent ✅' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>


    )
}

export default Contact