import Image from "next/image"
import { Navbar } from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center justify-between text-left lg:text-center font-mono text-xl p-6 lg:flex bg-blue-500 text-white">
        <p>High Power <br></br>Cleaning Service</p>
        <Navbar />
      </div>
      <div className="flex justify-around items-center m-12 flex-col lg:flex-row lg:">
        <p className=" text-2xl md:text-4xl font-mono text-blue-900 text-center m-10 w-full lg:w-2/5">Top Rated Cleaning Services! Years in the industry = Best quality service!</p>
        <Image src={"/cleaning-service-3666011_1280.png"} alt={""} height="400" width="400"></Image>
      </div>
      <div className="bg-white h-auto w-full lg:w-4/5 text-center items-center flex flex-col">
        <p className="text-lg sm:text-2xl font-mono underline text-blue-900 m-2">Customer Reviews</p>
        <p className="text-sm sm:text-lg italic text-blue-900">If you don&apos;t believe us just ask our loyal customers!</p>
        <div className="flex flex-col md:flex-row justify-evenly items-center p-6 h-auto w-11/12">
          <div className="bg-gray-100 drop-shadow-lg h-64 w-11/12 lg:w-96 flex flex-col items-center m-4">
            <div className="absolute -top-4 -right-8 lg:-top-10 lg:-right-2 h-16 w-16 z-50">
              <Image src={"/kisspng-computer-icons-quotation-citation-symbol-quote-5abfbdc0180467.3892997615225153920984.png"} alt={""} height="100" width="100" objectFit="cover"></Image>
            </div>
            <div className="relative w-3/4 pt-6 flex justify-center">
              <Image src={"/kisspng-star-system-confess-clip-art-star-rating-5aeed30a615e99.1344166615256010343988.png"} alt={""} height="200" width="200" objectFit="cover"></Image>
            </div>
            <p className="text-sm lg:text-lg font-mono text-black p-2">This was the best service I&apos;ve ever received!!</p>
            <p className="text-sm lg:text-md font-mono text-black p-2">- Susan B. / Downey</p>
          </div>
          <div className="bg-gray-100 drop-shadow-lg h-64 w-11/12 lg:w-96 flex flex-col items-center m-4">
            <div className="absolute -top-4 -right-8 lg:-top-10 lg:-right-2 h-16 w-16 z-50">
              <Image src={"/kisspng-computer-icons-quotation-citation-symbol-quote-5abfbdc0180467.3892997615225153920984.png"} alt={""} height="100" width="100" objectFit="cover"></Image>
            </div>
            <div className="relative w-3/4 pt-6 flex justify-center">
              <Image src={"/kisspng-star-system-confess-clip-art-star-rating-5aeed30a615e99.1344166615256010343988.png"} alt={""} height="200" width="200" objectFit="cover"></Image>
            </div>
            <p className="text-sm lg:text-lg font-mono text-black p-2">Johnny was great at getting in and getting the job done. Would hire him again in the future.</p>
            <p className="text-sm lg:text-md font-mono text-black p-2">- Jim Downs / Long Beach</p>
          </div>
          <div className="bg-gray-100 drop-shadow-lg h-64 w-11/12 lg:w-96 flex flex-col items-center m-4">
            <div className="absolute -top-4 -right-8 lg:-top-10 lg:-right-2 h-16 w-16 z-50">
              <Image src={"/kisspng-computer-icons-quotation-citation-symbol-quote-5abfbdc0180467.3892997615225153920984.png"} alt={""} height="100" width="100" objectFit="cover"></Image>
            </div>
            <div className="relative w-3/4 pt-6 flex justify-center">
              <Image src={"/kisspng-star-system-confess-clip-art-star-rating-5aeed30a615e99.1344166615256010343988.png"} alt={""} height="200" width="200" objectFit="cover"></Image>
            </div>
            <p className="text-sm lg:text-lg font-mono text-black p-2">Custer service here is unmatched. I felt like family the moment I walked in until the job was done.</p>
            <p className="text-sm lg:text-md font-mono text-black p-2">- Jack R. / Manhattan Beach</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-row items-center m-12">
        <div className="bg-yellow-400 rounded-full text-white px-8 py-2 cursor-pointer font-mono drop-shadow-md">
          <p>Book Now!</p>
        </div>
      </div>
      <div className="bg-blue-500 flex sm:text-lg text-sm text-center text-white h-19 w-full p-2">
        <p className="w-full">© 2024 High Power Cleaning Service. Proudly designed by <span className="underline italic sm:text-lg text-md cursonr-pointer"><a href="https://www.sidneymcclean.com" target="_blank">SLM</a></span></p>
      </div>
    </main>
  )
}