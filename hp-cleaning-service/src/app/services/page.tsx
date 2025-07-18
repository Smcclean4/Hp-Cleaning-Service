import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHandsWash, faComputer, faPhone, faStickyNote, faBucket } from "@fortawesome/free-solid-svg-icons";

export default function Services() {

    return (
        <main className="flex min-h-screen flex-col items-center">
             {/* Technology preview and Services indicator */}
      <div className="flex flex-row flex-wrap justify-center lg:justify-between text-center w-full lg:w-3/4 p-2 mb-24">
        <div className="w-3/4 lg:w-80 m-2">
          <FontAwesomeIcon className="m-4" icon={faLocationDot} color="navy" size="2xl" />
          <p className="underline text-xl font-mono text-white underline-offset-4 mb-2">Key Location</p>
          <p className="font-mono  text-lg">
            Centralized. Efficient. Customized. Our office, strategically located in [Los Angeles, CA], ensures easy access for businesses. Impeccable cleanliness and organization define our space, reflecting the high standards we uphold. Our tailored solutions guarantee superior results for your cleaning needs.</p>
        </div>
        <div className="w-3/4 lg:w-80 m-2">
          <FontAwesomeIcon className="m-4" icon={faHandsWash} color="navy" size="2xl" />
          <p className="underline text-xl font-mono text-white underline-offset-4 mb-2">Cleanliness Upheld</p>
          <p className="font-mono  text-lg">Indulge in cleanliness and welfare with High Power. We prioritize health and safety, using eco-friendly products and maintaining a pristine environment. Trust us to uphold hygiene standards for your well-being.</p>
        </div>
        <div className="w-3/4 lg:w-80 m-2">
          <FontAwesomeIcon className="m-4" icon={faComputer} color="navy" size="2xl" />
          <p className="underline text-xl font-mono text-white underline-offset-4 mb-2">Email Services</p>
          <p className="font-mono  text-lg">Discover streamlined communication and reporting with High Power. Our email service keeps you updated in real-time, providing reminders and offers. Access on-demand reports for transparency and control.</p>
        </div>
        <div className="w-3/4 lg:w-80 m-2">
          <FontAwesomeIcon className="m-4" icon={faPhone} color="navy" size="2xl" />
          <p className="underline text-xl font-mono text-white underline-offset-4 mb-2">24/7 Phone Access</p>
          <p className="font-mono  text-lg">Experience seamless communication with High Power&apos;s phone services. Whether scheduling appointments or addressing inquiries, our team is just a call away. Trust us for exceptional service.</p>
        </div>
        <div className="w-3/4 lg:w-80 m-2">
          <FontAwesomeIcon className="m-4" icon={faStickyNote} color="navy" size="2xl" />
          <p className="underline text-xl font-mono text-white underline-offset-4 mb-2">Detailed Notes</p>
          <p className="font-mono  text-lg">Elevate your cleaning experience with High Power&apos;s note-taking service. Detailed notes ensure transparency and accountability. From areas addressed to special instructions, we provide insights for your satisfaction.</p>
        </div>
        <div className="w-3/4 lg:w-80 m-2">
          <FontAwesomeIcon className="m-4" icon={faBucket} color="navy" size="2xl" />
          <p className="underline text-xl font-mono text-white underline-offset-4 mb-2">Prestine Tools and Equipment</p>
          <p className="font-mono  text-lg">Unlock pristine cleanliness with High Power&apos;s equipment insight. From power washers to cleaning ingredients, we employ top tools for exceptional results. Experience efficiency and quality with our commitment to using the best equipment.</p>
        </div>
      </div>
        </main>
    )
}