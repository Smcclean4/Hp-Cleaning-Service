"use client"

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock, faUser, faMessage, faCheck, faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: faPhone,
            title: "Phone",
            details: [
                "Emergency: (555) 123-4567",
                "Support: (555) 987-6543",
                "Text: (555) 456-7890"
            ],
            color: "blue"
        },
        {
            icon: faEnvelope,
            title: "Email",
            details: [
                "info@hpcleaning.com",
                "support@hpcleaning.com",
                "bookings@hpcleaning.com"
            ],
            color: "green"
        },
        {
            icon: faLocationDot,
            title: "Location",
            details: [
                "123 Cleaning Street",
                "Los Angeles, CA 90210",
                "Service Area: LA County"
            ],
            color: "purple"
        },
        {
            icon: faClock,
            title: "Hours",
            details: [
                "Monday - Friday: 8AM - 8PM",
                "Saturday: 9AM - 6PM",
                "Sunday: 10AM - 4PM",
                "Emergency: 24/7"
            ],
            color: "orange"
        }
    ];

    const services = [
        "Residential Cleaning",
        "Commercial Cleaning",
        "Deep Cleaning",
        "Move-in/Move-out",
        "Post-Construction",
        "Carpet Cleaning",
        "Upholstery Cleaning",
        "Window Cleaning"
    ];

    return (
        <main className="flex min-h-screen flex-col items-center">
            {/* Header Section */}
            <section className="w-full flex flex-col items-center justify-center min-h-[30vh] relative overflow-hidden mb-8">
                <div className="w-full h-[400px] relative">
                    <Image 
                        src="/pexels-tima-miroshnichenko-6195129 (1).jpg" 
                        alt="Contact header image" 
                        className="w-full h-full object-cover"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                        <div className="flex flex-col items-start justify-center w-full h-full px-8 md:px-16">
                            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border-l-4 border-blue-400">
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                                    Contact Us
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl leading-relaxed">
                                    Get in touch with our professional cleaning team. We're here to help with all your cleaning needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-7xl px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Info Cards */}
                        <div className="bg-white rounded-xl shadow-2xl border-l-4 border-blue-400 p-6">
                            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="mr-3 text-blue-400" />
                                Contact Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {contactInfo.map((info, index) => {
                                    const colorClasses = {
                                        blue: "border-blue-400 bg-blue-50",
                                        green: "border-green-400 bg-green-50",
                                        purple: "border-purple-400 bg-purple-50",
                                        orange: "border-orange-400 bg-orange-50"
                                    };
                                    
                                    return (
                                        <div key={index} className={`p-6 rounded-xl border-2 ${colorClasses[info.color as keyof typeof colorClasses]}`}>
                                            <div className="flex items-center mb-4">
                                                <FontAwesomeIcon 
                                                    icon={info.icon} 
                                                    className={`mr-3 text-${info.color}-600`} 
                                                    size="lg"
                                                />
                                                <h3 className="text-xl font-bold text-gray-800">{info.title}</h3>
                                            </div>
                                            <div className="space-y-2">
                                                {info.details.map((detail, detailIndex) => (
                                                    <p key={detailIndex} className="text-gray-700 font-medium">
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Service Areas */}
                        <div className="bg-white rounded-xl shadow-2xl border-l-4 border-green-400 p-6">
                            <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-green-400" />
                                Service Areas
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-3">Primary Service Areas:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Los Angeles</li>
                                        <li>• Beverly Hills</li>
                                        <li>• Santa Monica</li>
                                        <li>• Manhattan Beach</li>
                                        <li>• Hermosa Beach</li>
                                        <li>• Redondo Beach</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-3">Extended Areas:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Culver City</li>
                                        <li>• Marina del Rey</li>
                                        <li>• Playa del Rey</li>
                                        <li>• El Segundo</li>
                                        <li>• Torrance</li>
                                        <li>• Palos Verdes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Services Offered */}
                        <div className="bg-white rounded-xl shadow-2xl border-l-4 border-purple-400 p-6">
                            <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="mr-3 text-purple-400" />
                                Services We Offer
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-3" />
                                        <span className="text-gray-700 font-medium">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-2xl border-l-4 border-blue-400 p-6 sticky top-8">
                            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                                <FontAwesomeIcon icon={faMessage} className="mr-3 text-blue-400" />
                                Send Us a Message
                            </h2>

                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-3" />
                                        <p className="text-green-800 font-medium">
                                            Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general-inquiry">General Inquiry</option>
                                        <option value="booking">Booking Request</option>
                                        <option value="quote">Quote Request</option>
                                        <option value="complaint">Complaint</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <FontAwesomeIcon icon={faMessage} className="mr-2" />
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                                        placeholder="Tell us about your cleaning needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                        isSubmitting 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                                    }`}
                                >
                                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                </button>
                            </form>

                            {/* Emergency Contact */}
                            <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                                <h4 className="font-semibold text-red-800 mb-2">Emergency Service?</h4>
                                <p className="text-sm text-red-700 mb-2">
                                    For urgent cleaning needs, call us immediately:
                                </p>
                                <p className="text-lg font-bold text-red-800">(555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="my-12 bg-white rounded-xl shadow-2xl border-l-4 border-blue-400 p-6">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-blue-400" />
                        Find Us
                    </h2>
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 text-4xl mb-4" />
                            <p className="text-gray-600">Interactive Map Coming Soon</p>
                            <p className="text-sm text-gray-500 mt-2">123 Cleaning Street, Los Angeles, CA 90210</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}