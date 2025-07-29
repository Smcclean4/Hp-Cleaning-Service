import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHandsWash, faComputer, faPhone, faStickyNote, faBucket } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Services() {

    return (
        <main className="flex min-h-screen flex-col items-center">
          {/* Header section with image and title */}
          <section className="w-full flex flex-col items-center justify-center min-h-[25vh] relative overflow-hidden">
            <div className="w-full h-[500px] relative">
              <Image 
                src="/pexels-tima-miroshnichenko-6195129 (1).jpg" 
                alt="Services header image" 
                className="w-full h-full object-cover"
                fill
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                <div className="flex flex-col items-start justify-center w-full h-full px-8 md:px-16">
                  <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border-l-4 border-blue-400">
                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                      Our Services
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl leading-relaxed">
                      Professional cleaning solutions tailored to your needs. From residential to commercial, we deliver excellence in every detail.
                    </p>
                    <div className="flex items-center text-white animate-bounce">
                      <span className="text-lg mr-2">Explore our services</span>
                      <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Technology preview and Services indicator */}
          <div className="flex flex-row flex-wrap justify-center lg:justify-between text-left w-full lg:w-3/4 p-2 mb-24 mt-8">
            <div className="w-3/4 hover:cursor-pointer lg:w-80 m-6 drop-shadow-2xl border-l-4 border-blue-900 bg-gradient-to-br from-gray-50 to-white rounded-xl min-w-[350px] py-6 px-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon className="m-4 text-blue-900 group-hover:scale-110 transition-transform duration-300" icon={faLocationDot} size="2xl" />
                <h3 className="text-2xl font-bold text-blue-950 underline underline-offset-4">Key Location</h3>
              </div>
              <p className="font-mono text-lg text-gray-700 mb-4 leading-relaxed">
                Centralized. Efficient. Customized. Our office, strategically located in [Los Angeles, CA], ensures easy access for businesses. Impeccable cleanliness and organization define our space, reflecting the high standards we uphold.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">📍 Service Area</h4>
                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                  <span>🗺️ Interactive Map Coming Soon</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Los Angeles, CA • 24/7 Coverage</p>
              </div>
            </div>

            <div className="w-3/4 hover:cursor-pointer lg:w-80 m-6 drop-shadow-2xl border-l-4 border-green-600 bg-gradient-to-br from-gray-50 to-white rounded-xl min-w-[350px] py-6 px-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon className="m-4 text-green-600 group-hover:scale-110 transition-transform duration-300" icon={faHandsWash} size="2xl" />
                <h3 className="text-2xl font-bold text-green-800 underline underline-offset-4">Cleanliness Upheld</h3>
              </div>
              <p className="font-mono text-lg text-gray-700 mb-4 leading-relaxed">
                Indulge in cleanliness and welfare with High Power. We prioritize health and safety, using eco-friendly products and maintaining a pristine environment. Trust us to uphold hygiene standards for your well-being.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">🌱 Eco-Friendly Products</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Non-toxic cleaning solutions</li>
                  <li>• HEPA filtration systems</li>
                  <li>• Certified organic products</li>
                </ul>
              </div>
            </div>

            <div className="w-3/4 hover:cursor-pointer lg:w-80 m-6 drop-shadow-2xl border-l-4 border-purple-600 bg-gradient-to-br from-gray-50 to-white rounded-xl min-w-[350px] py-6 px-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon className="m-4 text-purple-600 group-hover:scale-110 transition-transform duration-300" icon={faComputer} size="2xl" />
                <h3 className="text-2xl font-bold text-purple-800 underline underline-offset-4">Email Services</h3>
              </div>
              <p className="font-mono text-lg text-gray-700 mb-4 leading-relaxed">
                Discover streamlined communication and reporting with High Power. Our email service keeps you updated in real-time, providing reminders and offers. Access on-demand reports for transparency and control.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">📧 Digital Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real-time service updates</li>
                  <li>• Automated appointment reminders</li>
                  <li>• Digital service reports</li>
                </ul>
              </div>
            </div>

            <div className="w-3/4 hover:cursor-pointer lg:w-80 m-6 drop-shadow-2xl border-l-4 border-red-600 bg-gradient-to-br from-gray-50 to-white rounded-xl min-w-[350px] py-6 px-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon className="m-4 text-red-600 group-hover:scale-110 transition-transform duration-300" icon={faPhone} size="2xl" />
                <h3 className="text-2xl font-bold text-red-800 underline underline-offset-4">24/7 Phone Access</h3>
              </div>
              <p className="font-mono text-lg text-gray-700 mb-4 leading-relaxed">
                Experience seamless communication with High Power's phone services. Whether scheduling appointments or addressing inquiries, our team is just a call away. Trust us for exceptional service.
              </p>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">📞 Contact Options</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Emergency hotline: (555) 123-4567</p>
                  <p>• Support: (555) 987-6543</p>
                  <p>• Text: (555) 456-7890</p>
                </div>
              </div>
            </div>

            <div className="w-3/4 hover:cursor-pointer lg:w-80 m-6 drop-shadow-2xl border-l-4 border-orange-600 bg-gradient-to-br from-gray-50 to-white rounded-xl min-w-[350px] py-6 px-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon className="m-4 text-orange-600 group-hover:scale-110 transition-transform duration-300" icon={faStickyNote} size="2xl" />
                <h3 className="text-2xl font-bold text-orange-800 underline underline-offset-4">Detailed Notes</h3>
              </div>
              <p className="font-mono text-lg text-gray-700 mb-4 leading-relaxed">
                Elevate your cleaning experience with High Power's note-taking service. Detailed notes ensure transparency and accountability. From areas addressed to special instructions, we provide insights for your satisfaction.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">📝 Documentation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Before/after photos</li>
                  <li>• Service checklists</li>
                  <li>• Custom instructions log</li>
                </ul>
              </div>
            </div>

            <div className="w-3/4 hover:cursor-pointer lg:w-80 m-6 drop-shadow-2xl border-l-4 border-teal-600 bg-gradient-to-br from-gray-50 to-white rounded-xl min-w-[350px] py-6 px-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon className="m-4 text-teal-600 group-hover:scale-110 transition-transform duration-300" icon={faBucket} size="2xl" />
                <h3 className="text-2xl font-bold text-teal-800 underline underline-offset-4">Pristine Tools & Equipment</h3>
              </div>
              <p className="font-mono text-lg text-gray-700 mb-4 leading-relaxed">
                Unlock pristine cleanliness with High Power's equipment insight. From power washers to cleaning ingredients, we employ top tools for exceptional results. Experience efficiency and quality with our commitment to using the best equipment.
              </p>
              <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">🛠️ Professional Equipment</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Industrial-grade vacuums</li>
                  <li>• Steam cleaning systems</li>
                  <li>• UV sanitization units</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
    )
}