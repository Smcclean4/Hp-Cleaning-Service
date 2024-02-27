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
        <p className=" text-2xl md:text-4xl font-mono text-blue-900 text-center m-10 w-full lg:w-2/5">Top Rated Cleaning Services! Years in the industry = Best quality service!</p>
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
      <div className="flex flex-row flex-wrap justify-center text-center items-center w-3/4 p-6">
        <div className="w-1/4 m-2">
          <FontAwesomeIcon icon={faLocationDot} color="dodgerblue" size="2xl" />
          <p>
            Centralized. Efficient. Customized. Our office, strategically located in [Los Angeles, CA], ensures easy access for businesses. Impeccable cleanliness and organization define our space, reflecting the high standards we uphold. Our tailored solutions, delivered by skilled professionals, guarantee superior results for your commercial cleaning needs.</p>
        </div>
        <div className="w-1/4 m-2">
          <FontAwesomeIcon icon={faHandsWash} color="dodgerblue" size="2xl" />
          <p>Indulge in the epitome of cleanliness and employee welfare with High Power. We prioritize your health and safety by exclusively using eco-friendly products, practicing regular hand washing, and maintaining a pristine work environment. Trust us to uphold the highest standards of hygiene for your utmost well-being.</p>
        </div>
        <div className="w-1/4 m-2">
          <FontAwesomeIcon icon={faComputer} color="dodgerblue" size="2xl" />
          <p>Discover the power of streamlined communication and comprehensive reporting with High Power. Our email service keeps you informed in real-time, providing updates, reminders, and special offers directly to your inbox. Plus, access on-demand reports effortlessly, giving you full transparency and control over your cleaning operations.</p>
        </div>
        <div className="w-1/4 m-2">
          <FontAwesomeIcon icon={faPhone} color="dodgerblue" size="2xl" />
          <p>Experience seamless communication with High Power&apos;s reliable phone services. Whether scheduling appointments, addressing inquiries, or providing support, our dedicated team is just a call away. Trust us to deliver exceptional service and personalized assistance, ensuring your cleaning needs are met with utmost efficiency and care.</p>
        </div>
        <div className="w-1/4 m-2">
          <FontAwesomeIcon icon={faStickyNote} color="dodgerblue" size="2xl" />
          <p>Elevate your cleaning experience with our meticulous note-taking service at High Power. After every cleaning, our dedicated team leaves behind detailed notes, ensuring transparency and accountability. From areas addressed to special instructions, we provide comprehensive insights to guarantee your satisfaction and maintain a pristine environment.</p>
        </div>
        <div className="w-1/4 m-2">
          <FontAwesomeIcon icon={faBucket} color="dodgerblue" size="2xl" />
          <p>Unlock the power of pristine cleanliness with High Power&apos;s cutting-edge equipment insight. From powerful power washers to premium cleaning ingredients, we employ top-of-the-line tools and technology to ensure your space shines. Experience unmatched efficiency and quality with our commitment to using only the best equipment for exceptional results.</p>
        </div>
      </div>
      {/* Customer review section */}
      <div className="bg-white h-auto w-full lg:w-4/5 text-center items-center flex flex-col">
        <p className="text-lg sm:text-2xl font-mono underline text-blue-900 m-2">Customer Reviews</p>
        <p className="text-sm sm:text-lg italic text-blue-900">If you don&apos;t believe us just ask our loyal customers!</p>
        <div className="flex flex-col md:flex-row justify-evenly items-center p-6 h-auto w-11/12">
          <div className="bg-gray-100 drop-shadow-lg h-64 w-11/12 lg:w-96 flex flex-col items-center m-4">
            <div className="absolute -top-4 -right-8 lg:-top-10 lg:-right-2 h-16 w-16 z-50">
              <Image src={"/kisspng-computer-icons-quotation-citation-symbol-quote-5abfbdc0180467.3892997615225153920984.png"} alt={""} fill={true} objectFit="cover"></Image>
            </div>
            <div className="relative w-3/4 pt-6 flex justify-center">
              <Image src={"/kisspng-star-system-confess-clip-art-star-rating-5aeed30a615e99.1344166615256010343988.png"} alt={""} height="200" width="200" objectFit="cover"></Image>
            </div>
            <p className="text-sm lg:text-lg font-mono text-black p-2">This was the best service I&apos;ve ever received!!</p>
            <p className="text-sm lg:text-md font-mono text-black p-2">- Susan B. / Downey</p>
          </div>
          <div className="bg-gray-100 drop-shadow-lg h-64 w-11/12 lg:w-96 flex flex-col items-center m-4">
            <div className="absolute -top-4 -right-8 lg:-top-10 lg:-right-2 h-16 w-16 z-50">
              <Image src={"/kisspng-computer-icons-quotation-citation-symbol-quote-5abfbdc0180467.3892997615225153920984.png"} alt={""} fill={true} objectFit="cover"></Image>
            </div>
            <div className="relative w-3/4 pt-6 flex justify-center">
              <Image src={"/kisspng-star-system-confess-clip-art-star-rating-5aeed30a615e99.1344166615256010343988.png"} alt={""} height="200" width="200" objectFit="cover"></Image>
            </div>
            <p className="text-sm lg:text-lg font-mono text-black p-2">Johnny was great at getting in and getting the job done. Would hire him again in the future.</p>
            <p className="text-sm lg:text-md font-mono text-black p-2">- Jim Downs / Long Beach</p>
          </div>
          <div className="bg-gray-100 drop-shadow-lg h-64 w-11/12 lg:w-96 flex flex-col items-center m-4">
            <div className="absolute -top-4 -right-8 lg:-top-10 lg:-right-2 h-16 w-16 z-50">
              <Image src={"/kisspng-computer-icons-quotation-citation-symbol-quote-5abfbdc0180467.3892997615225153920984.png"} alt={""} fill={true} objectFit="cover"></Image>
            </div>
            <div className="relative w-3/4 pt-6 flex justify-center">
              <Image src={"/kisspng-star-system-confess-clip-art-star-rating-5aeed30a615e99.1344166615256010343988.png"} alt={""} height="200" width="200" objectFit="cover"></Image>
            </div>
            <p className="text-sm lg:text-lg font-mono text-black p-2">Custer service here is unmatched. I felt like family the moment I walked in until the job was done.</p>
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