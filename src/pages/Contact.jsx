import React from "react";

const Contact = () => {
    return (
        <section className="min-h-screen bg-gray-100 text-gray-900 py-16 px-6 pt-[104px]">
            {/* pt-[84px] = navbar height (64px) + 20px extra */}
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="mt-2 text-gray-600">
                        Have questions about your academic journey? We’d love to hear from you.
                    </p>
                </div>

                {/* Layout: Form (Left) + Info (Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left - Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                        <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                        <form className="space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right - Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                        <p className="text-gray-600 mb-4">
                            Reach out to us directly via phone, email, or visit us at our office.
                        </p>
                        <ul className="space-y-4">
                            <li>
                                <span className="font-medium">📍 Address:</span> 54 bhinder, gangadevi nagar, behind radisson blu, 452010, Indore, (M.P)
                            </li>
                            <li>
                                <span className="font-medium">📞 Phone:</span> +91 72408-20997, +91 94798-99710
                            </li>
                            <li>
                                <span className="font-medium">✉️ Email:</span> karoriacademicadvisor@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Google Map */}
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 pt-10">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3391.9323301862914!2d75.89734807530571!3d22.751118079365025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ1JzA0LjAiTiA3NcKwNTMnNTkuNyJF!5e1!3m2!1sen!2sin!4v1756189494978!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    
                </div>

            </div>
        </section>
    );
};

export default Contact;
