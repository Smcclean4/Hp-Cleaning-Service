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
      <div className="bg-white h-96 w-full lg:w-4/5 text-center">
        <div>
          <p className="text-lg sm:text-2xl font-mono underline text-blue-900 m-2">Customer Reviews</p>
          <p className="text-sm sm:text-lg italic text-blue-900">If you don't believe us just ask our loyal customers!</p>
        </div>
      </div>
      <div className="flex justify-around flex-row items-center m-12">
        <div className="bg-yellow-400 rounded-full text-white px-8 py-2 cursor-pointer font-mono">
          <p>Book Now!</p>
        </div>
      </div>
      <div className="bg-blue-500 flex text-center text-white h-19 w-full p-2">
        <p className="w-full">© 2024 High Power Cleaning Service. Proudly designed by <span className="underline italic text-lg cursonr-pointer">SLM</span></p>
      </div>
    </main>
  )
}
