import Image from "next/image"
import { Navbar } from "./components/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBroom, faBucket, faComputer, faCrosshairs, faHandsWash, faLocation, faLocationArrow, faLocationDot, faNoteSticky, faNotesMedical, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faPagelines } from "@fortawesome/free-brands-svg-icons"
import { faStickyNote } from "@fortawesome/free-regular-svg-icons/faStickyNote"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* High power cleaning and leading statement */}
      <div className="z-10 w-full items-center justify-between text-left lg:text-center font-mono text-xl p-6 lg:flex bg-blue-500 text-white">
        <p>High Power <br></br>Cleaning Service</p>
        <Navbar />
      </div>
      <div className="flex justify-around items-center m-12 flex-col lg:flex-row lg:">
        <p className=" text-2xl md:text-4xl font-mono text-blue-900 text-center m-10 w-full lg:w-2/5">Top-rated cleaning service with years of experience, delivering excellence with meticulous attention to detail and eco-friendly products for spotless spaces.</p>
        <Image src={"/cleaning-service-3666011_1280.png"} alt={""} height="400" width="400"></Image>
      </div>
      {/* Image and skillset highlight */}
      <div className="w-full lg:w-11/12 flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-12 mb-4 md:mt-36">
        <div className="relative w-full md:w-auto flex flex-col md:flex-row justify-center items-center">
          <div className="relative lg:absolute lg:bottom-12 lg:left-80 w-64 h-96 items-center m-2 md:m-10">
            <Image src={"/pexels-tima-miroshnichenko-6197122.jpg"} alt={""} fill={true}></Image>
          </div>
          <div className="relative w-96 h-64 items-center m-2 md:m-10 z-50">
            <Image src={"/pexels-tima-miroshnichenko-6197121.jpg"} alt={""} fill={true}></Image>
          </div>
        </div>
        <div className="flex flex-col text-center w-full lg:w-2/5 md:w-3/4 p-10">
          <p className="text-2xl lg:text-3xl xl:text-4xl text-blue-900 font-mono">Rated and Known for our Services. Maintained and built upon our Technology.</p>
          <p className="font-mono text-xl lg:text-2xl xl:text-3xl">Efficiently manage your service, allocate tasks, and enhance customer experience with real-time data visibility and customized workflows.</p>
        </div>
      </div>
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
      {/* Customer review section */}
      <div className="bg-gradient-to-r from-white via-blue-300 to-white h-auto w-full lg:w-4/5 text-center items-center flex flex-col">
        <p className="text-lg sm:text-2xl font-mono underline text-white m-2">Customer Reviews</p>
        <p className="text-sm sm:text-lg italic text-blue-900">If you don&apos;t believe us just ask our loyal customers!</p>
        <div className="flex flex-col md:flex-row justify-evenly items-center p-6 h-auto w-11/12">
          <div className="bg-gray-500 bg-opacity-25 drop-shadow-lg h-64 w-11/12 lg:w-96 flex flex-col items-center m-4">
            <div className="hidden sm:block absolute -top-4 -right-8 lg:-top-10 lg:-right-2 h-16 w-16 z-50">
              <Image src={"/kisspng-computer-icons-quotation-citation-symbol-quote-5abfbdc0180467.3892997615225153920984.png"} alt={""} fill={true} objectFit="cover"></Image>
            </div>
            <div className="relative w-3/4 pt-6 flex justify-center">
              <Image src={"/kisspng-star-system-confess-clip-art-star-rating-5aeed30a615e99.1344166615256010343988.png"} alt={""} height="200" width="200" objectFit="cover"></Image>
            </div>
            <p className="text-sm lg:text-lg font-mono text-black p-2">This was the best service I&apos;ve ever received!!</p>
            <p className="text-sm lg:text-md font-mono text-black p-2">- Susan B. / Downey</p>
          </div>
          <div className="bg-gray-500 bg-opacity-25 drop-shadow-lg h-64 w-11/12 lg:w-96 flex flex-col items-center m-4">
            <div className="hidden sm:block absolute -top-4 -right-8 lg:-top-10 lg:-right-2 h-16 w-16 z-50">
              <Image src={"/kisspng-computer-icons-quotation-citation-symbol-quote-5abfbdc0180467.3892997615225153920984.png"} alt={""} fill={true} objectFit="cover"></Image>
            </div>
            <div className="relative w-3/4 pt-6 flex justify-center">
              <Image src={"/kisspng-star-system-confess-clip-art-star-rating-5aeed30a615e99.1344166615256010343988.png"} alt={""} height="200" width="200" objectFit="cover"></Image>
            </div>
            <p className="text-sm lg:text-lg font-mono text-black p-2">Johnny was great at getting in and getting the job done. Would hire him again in the future.</p>
            <p className="text-sm lg:text-md font-mono text-black p-2">- Jim Downs / Long Beach</p>
          </div>
          <div className="bg-gray-500 bg-opacity-25 drop-shadow-lg h-64 w-11/12 lg:w-96 flex flex-col items-center m-4">
            <div className="hidden sm:block absolute -top-4 -right-8 lg:-top-10 lg:-right-2 h-16 w-16 z-50">
              <Image src={"/kisspng-computer-icons-quotation-citation-symbol-quote-5abfbdc0180467.3892997615225153920984.png"} alt={""} fill={true} objectFit="cover"></Image>
            </div>
            <div className="relative w-3/4 pt-6 flex justify-center">
              <Image src={"/kisspng-star-system-confess-clip-art-star-rating-5aeed30a615e99.1344166615256010343988.png"} alt={""} height="200" width="200" objectFit="cover"></Image>
            </div>
            <p className="text-sm lg:text-lg font-mono text-black p-2">Customer service here is unmatched. I felt like family the moment I walked in until the job was done.</p>
            <p className="text-sm lg:text-md font-mono text-black p-2">- Jack R. / Manhattan Beach</p>
          </div>
        </div>
      </div>
      {/* Book now!! */}
      <div className="flex justify-around flex-row items-center m-12">
        <div className="bg-yellow-400 rounded-full text-white px-8 py-2 cursor-pointer font-mono drop-shadow-md">
          <p>Book Now!</p>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-blue-500 flex sm:text-lg text-sm text-center text-white h-19 w-full p-2">
        <p className="w-full">© 2024 High Power Cleaning Service. Proudly designed by <span className="underline italic sm:text-lg text-md cursonr-pointer"><a href="https://www.sidneymcclean.com" target="_blank">SLM</a></span></p>
      </div>
    </main >
  )
}