"use client"

import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHandsWash, faComputer, faPhone, faStickyNote, faBucket, faCalendarAlt, faClock, faUser, faCheck, faStar, faCrown, faGem } from "@fortawesome/free-solid-svg-icons";

export default function Book() {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");

    const serviceTiers = [
        {
            id: "basic",
            name: "Basic Cleaning",
            icon: faStar,
            color: "blue",
            description: "Essential cleaning services for regular maintenance",
            items: [
                { id: "basic-dusting", name: "Surface Dusting", price: 25, description: "Dust all surfaces, shelves, and furniture" },
                { id: "basic-vacuum", name: "Vacuum & Sweep", price: 30, description: "Vacuum carpets and sweep hard floors" },
                { id: "basic-bathroom", name: "Bathroom Cleaning", price: 40, description: "Clean toilets, sinks, showers, and mirrors" },
                { id: "basic-kitchen", name: "Kitchen Cleaning", price: 35, description: "Clean countertops, appliances, and surfaces" },
                { id: "basic-trash", name: "Trash Removal", price: 15, description: "Empty and replace trash bags" }
            ]
        },
        {
            id: "standard",
            name: "Standard Cleaning",
            icon: faCrown,
            color: "green",
            description: "Comprehensive cleaning with attention to detail",
            items: [
                { id: "standard-dusting", name: "Deep Dusting", price: 35, description: "Detailed dusting including baseboards and vents" },
                { id: "standard-vacuum", name: "Deep Vacuum", price: 40, description: "Vacuum carpets, furniture, and hard-to-reach areas" },
                { id: "standard-bathroom", name: "Deep Bathroom", price: 55, description: "Thorough bathroom cleaning including grout" },
                { id: "standard-kitchen", name: "Deep Kitchen", price: 50, description: "Detailed kitchen cleaning including inside appliances" },
                { id: "standard-windows", name: "Window Cleaning", price: 30, description: "Clean interior windows and mirrors" },
                { id: "standard-laundry", name: "Laundry Service", price: 45, description: "Wash, dry, and fold laundry" },
                { id: "standard-organization", name: "Organization", price: 35, description: "Organize and declutter spaces" }
            ]
        },
        {
            id: "premium",
            name: "Premium Cleaning",
            icon: faGem,
            color: "purple",
            description: "Luxury cleaning service with premium products",
            items: [
                { id: "premium-dusting", name: "Premium Dusting", price: 50, description: "Ultra-detailed dusting with microfiber cloths" },
                { id: "premium-vacuum", name: "Premium Vacuum", price: 60, description: "HEPA vacuum with deep carpet cleaning" },
                { id: "premium-bathroom", name: "Premium Bathroom", price: 75, description: "Luxury bathroom cleaning with steam sanitization" },
                { id: "premium-kitchen", name: "Premium Kitchen", price: 70, description: "Deep kitchen cleaning with appliance detailing" },
                { id: "premium-windows", name: "Premium Windows", price: 45, description: "Interior and exterior window cleaning" },
                { id: "premium-laundry", name: "Premium Laundry", price: 65, description: "Premium laundry service with fabric care" },
                { id: "premium-organization", name: "Premium Organization", price: 55, description: "Professional organization and decluttering" },
                { id: "premium-sanitization", name: "UV Sanitization", price: 80, description: "UV light sanitization for high-touch areas" },
                { id: "premium-air", name: "Air Purification", price: 40, description: "Air purifier treatment and filter replacement" }
            ]
        }
    ];

    const addOnServices = [
        {
            id: "carpet-cleaning",
            name: "Carpet Deep Cleaning",
            price: 120,
            description: "Professional carpet cleaning with steam extraction",
            icon: faBucket,
            color: "teal"
        },
        {
            id: "upholstery",
            name: "Upholstery Cleaning",
            price: 95,
            description: "Deep cleaning for furniture and upholstery",
            icon: faHandsWash,
            color: "orange"
        },
        {
            id: "move-in-out",
            name: "Move-in/Move-out",
            price: 200,
            description: "Comprehensive cleaning for moving situations",
            icon: faLocationDot,
            color: "red"
        },
        {
            id: "post-construction",
            name: "Post-Construction",
            price: 250,
            description: "Specialized cleaning after construction work",
            icon: faStickyNote,
            color: "yellow"
        }
    ];

    const timeSlots = [
        "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", 
        "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", 
        "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
    ];

    const toggleItem = (itemId: string) => {
        setSelectedItems(prev => 
            prev.includes(itemId) 
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const getItemPrice = (itemId: string) => {
        // Check in service tiers first
        for (const tier of serviceTiers) {
            const item = tier.items.find(i => i.id === itemId);
            if (item) return item.price;
        }
        // Check in add-on services
        const addOn = addOnServices.find(a => a.id === itemId);
        return addOn?.price || 0;
    };

    const getTotalPrice = () => {
        return selectedItems.reduce((total, itemId) => {
            return total + getItemPrice(itemId);
        }, 0);
    };

    const handleBooking = () => {
        if (!customerName || !customerEmail || !selectedDate || !selectedTime || selectedItems.length === 0) {
            alert("Please fill in all required fields and select at least one service.");
            return;
        }
        alert("Booking submitted successfully! We'll contact you soon to confirm your appointment.");
    };

    return (
        <main className="flex min-h-screen flex-col items-center">
            {/* Header Section */}
            <section className="w-full flex flex-col items-center justify-center min-h-[30vh] relative overflow-hidden mb-8">
                <div className="w-full h-[400px] relative">
                    <Image 
                        src="/pexels-tima-miroshnichenko-6195129 (1).jpg" 
                        alt="Booking header image" 
                        className="w-full h-full object-cover"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                        <div className="flex flex-col items-start justify-center w-full h-full px-8 md:px-16">
                            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border-l-4 border-blue-400">
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                                    Choose Your Services
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl leading-relaxed">
                                    Select from our service tiers and customize your cleaning package.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-7xl px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Services Selection */}
                    <div className="lg:col-span-2">
                        {/* Service Tiers */}
                        <div className="bg-white rounded-xl shadow-2xl border-l-4 border-blue-400 p-6 mb-8">
                            <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="mr-3 text-blue-400" />
                                Service Tiers
                            </h2>
                            
                            {serviceTiers.map((tier) => {
                                const colorClasses = {
                                    blue: "border-blue-400 bg-blue-50",
                                    green: "border-green-400 bg-green-50",
                                    purple: "border-purple-400 bg-purple-50"
                                };
                                
                                return (
                                    <div key={tier.id} className={`mb-8 p-6 rounded-xl border-2 ${colorClasses[tier.color as keyof typeof colorClasses]}`}>
                                        <div className="flex items-center mb-4">
                                            <FontAwesomeIcon 
                                                icon={tier.icon} 
                                                className={`mr-3 text-${tier.color}-600`} 
                                                size="lg"
                                            />
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-800">{tier.name}</h3>
                                                <p className="text-gray-600">{tier.description}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {tier.items.map((item) => {
                                                const isSelected = selectedItems.includes(item.id);
                                                return (
                                                    <div
                                                        key={item.id}
                                                        className={`
                                                            p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105
                                                            ${isSelected ? 'border-blue-500 bg-blue-100 ring-2 ring-blue-300' : 'border-gray-200 bg-white hover:border-gray-300'}
                                                        `}
                                                        onClick={() => toggleItem(item.id)}
                                                    >
                                                        <div className="flex items-start justify-between mb-2">
                                                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                                            <div className="flex items-center">
                                                                <span className="text-lg font-bold text-gray-800">${item.price}</span>
                                                                {isSelected && (
                                                                    <FontAwesomeIcon icon={faCheck} className="ml-2 text-green-600" />
                                                                )}
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-gray-600">{item.description}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}

                        {/* Add-on Services */}
                        <div className="bg-white rounded-xl shadow-2xl border-l-4 border-orange-400 p-6 mb-8">
                            <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
                                <FontAwesomeIcon icon={faStar} className="mr-3 text-orange-400" />
                                Additional Services
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {addOnServices.map((service) => {
                                    const isSelected = selectedItems.includes(service.id);
                                    const colorClasses = {
                                        teal: "border-teal-400 bg-teal-50 hover:bg-teal-100",
                                        orange: "border-orange-400 bg-orange-50 hover:bg-orange-100",
                                        red: "border-red-400 bg-red-50 hover:bg-red-100",
                                        yellow: "border-yellow-400 bg-yellow-50 hover:bg-yellow-100"
                                    };
                                    
                                    return (
                                        <div
                                            key={service.id}
                                            className={`
                                                p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105
                                                ${isSelected ? 'ring-4 ring-blue-300 shadow-lg' : ''}
                                                ${colorClasses[service.color as keyof typeof colorClasses]}
                                            `}
                                            onClick={() => toggleItem(service.id)}
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center">
                                                    <FontAwesomeIcon 
                                                        icon={service.icon} 
                                                        className={`mr-3 text-${service.color}-600`} 
                                                        size="lg"
                                                    />
                                                    <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-2xl font-bold text-gray-800">${service.price}</span>
                                                    {isSelected && (
                                                        <div className="mt-2">
                                                            <FontAwesomeIcon icon={faCheck} className="text-green-600 text-xl" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Fixed Booking Form */}
                    <div className="lg:col-span-1">
                        <div className={`bg-white rounded-xl shadow-2xl border-l-4 border-blue-400 p-6 lg:fixed top-12 right-12 xl:right-24 w-full lg:w-80 max-h-[calc(90vh-6rem)] overflow-y-scroll my-10`}>
                            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-3 text-blue-400" />
                                Booking Details
                            </h2>

                            {/* Real-time Total Display */}
                            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-lg font-semibold text-blue-900">Current Total:</span>
                                    <span className="text-2xl font-bold text-blue-600">${getTotalPrice()}</span>
                                </div>
                                {selectedItems.length > 0 && (
                                    <p className="text-sm text-blue-700">
                                        {selectedItems.length} service{selectedItems.length !== 1 ? 's' : ''} selected
                                    </p>
                                )}
                            </div>

                            {/* Customer Information */}
                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={customerName}
                                        onChange={(e) => setCustomerName(e.target.value)}
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
                                        value={customerEmail}
                                        onChange={(e) => setCustomerEmail(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        value={customerPhone}
                                        onChange={(e) => setCustomerPhone(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            {/* Date and Time Selection */}
                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                                        Preferred Date *
                                    </label>
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                                        Preferred Time *
                                    </label>
                                    <select
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    >
                                        <option value="">Select a time</option>
                                        {timeSlots.map((time) => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Selected Services Summary */}
                            {selectedItems.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Selected Services:</h3>
                                    <div className="space-y-2 max-h-32 overflow-y-auto">
                                        {selectedItems.map((itemId) => {
                                            let itemName = "";
                                            let itemPrice = 0;
                                            
                                            // Find item in service tiers
                                            for (const tier of serviceTiers) {
                                                const item = tier.items.find(i => i.id === itemId);
                                                if (item) {
                                                    itemName = item.name;
                                                    itemPrice = item.price;
                                                    break;
                                                }
                                            }
                                            
                                            // Find item in add-on services
                                            if (!itemName) {
                                                const addOn = addOnServices.find(a => a.id === itemId);
                                                if (addOn) {
                                                    itemName = addOn.name;
                                                    itemPrice = addOn.price;
                                                }
                                            }
                                            
                                            return (
                                                <div key={itemId} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg text-sm">
                                                    <span className="font-medium text-gray-700 truncate">{itemName}</span>
                                                    <span className="font-bold text-gray-800">${itemPrice}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Book Button */}
                            <button
                                onClick={handleBooking}
                                disabled={selectedItems.length === 0}
                                className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                    selectedItems.length === 0 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                                }`}
                            >
                                {selectedItems.length === 0 ? 'Select Services First' : `Book Now - $${getTotalPrice()}`}
                            </button>

                            {/* Support Info */}
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">Need Help?</h4>
                                <p className="text-sm text-blue-700">
                                    Call us at (555) 123-4567 or email support@hpcleaning.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    );
}