"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Gallery from './components/Gallery'
import Link from "next/link";

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % 3);
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const reviews = [
    {
      id: 0,
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-500",
      text: "This was the best service I've ever received!!",
      image: "/pexels-vinicius-wiesehofer-289347-1130626.jpg",
      author: "Susan B. / Downey"
    },
    {
      id: 1,
      borderColor: "border-green-500",
      bgColor: "bg-green-500",
      text: "Johnny was great at getting in and getting the job done. Would hire him again in the future.",
      image:"/pexels-mastercowley-1300402.jpg",
      author: "Jim Downs / Long Beach"
    },
    {
      id: 2,
      borderColor: "border-red-500",
      bgColor: "bg-red-500",
      text: "Customer service here is unmatched. I felt like family the moment I walked in until the job was done.",
      image:"/pexels-creationhill-1681010.jpg",
      author: "Jack R. / Manhattan Beach"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex justify-around items-center m-12 flex-col h-auto lg:flex-row lg:">
        <p className=" text-2xl md:text-4xl font-mono text-blue-900 text-center m-10 w-full lg:w-2/5">Top-rated cleaning service with years of experience, delivering excellence with meticulous attention to detail and eco-friendly products for spotless spaces.</p>
        <Image src={"/cleaning-service-3666011_1280.png"} alt={""} height="400" width="400"></Image>
      </div>
      {/* Image and skillset highlight */}
      <div className="w-full lg:w-11/12 flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-12 mb-4 md:mt-36">
        <div className="relative w-full md:w-auto flex flex-col md:flex-row justify-center items-center">
          <div className="relative border-2 border-blue-300 lg:absolute lg:bottom-12 lg:left-80 w-64 h-96 items-center m-2 md:m-10">
            <Image src={"/pexels-tima-miroshnichenko-6197122.jpg"} alt={""} fill={true}></Image>
          </div>
          <div className="relative border-2 border-blue-300 w-96 h-64 items-center m-2 md:m-10 z-50">
            <Image src={"/pexels-tima-miroshnichenko-6197121.jpg"} alt={""} fill={true}></Image>
          </div>
        </div>
        <div className="flex flex-col text-center w-full lg:w-2/5 md:w-3/4 p-10">
          <p className="text-2xl lg:text-3xl xl:text-4xl text-blue-900 font-mono">Rated and Known for our Services. Maintained and built upon our Technology.</p>
          <p className="font-mono text-xl lg:text-2xl xl:text-3xl">Efficiently manage your service, allocate tasks, and enhance customer experience with real-time data visibility and customized workflows.</p>
        </div>
      </div>
            {/* Gallery */}
            <Gallery />
      {/* Customer review section */}
      <div className="w-full text-center items-center flex flex-col mt-16">
        {/* Banner - Full Width */}
        <div className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-8 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-white/60 rounded-full mr-4"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
                Customer Reviews
              </h2>
              <div className="w-12 h-1 bg-white/60 rounded-full ml-4"></div>
            </div>
            <p className="text-lg sm:text-xl text-white/90 font-light mb-2">
              Don&apos;t just take our word for it
            </p>
            <p className="text-sm sm:text-base text-white/80 italic">
              Hear from our satisfied customers across Los Angeles
            </p>
          </div>
        </div>
        
        {/* Animated Review Carousel */}
        <div className="w-full xl:w-4/5 mx-auto">
          <div className="flex justify-center items-center p-6 h-auto w-full relative">
            <div className="flex items-center flex-col md:flex-row justify-center gap-4 w-full">
              {reviews.map((review, index) => {
                const isActive = index === currentReview;
                const isPrev = index === (currentReview - 1 + 3) % 3;
                const isNext = index === (currentReview + 1) % 3;
                
                return (
                  <div
                    key={review.id}
                    className={`
                      bg-white w-2/3 md:w-full h-full border-2 rounded-xl ${review.borderColor} drop-shadow-2xl 
                      transition-all duration-700 ease-in-out
                      ${isActive 
                        ? 'h-96 w-3/5 scale-110 z-20 opacity-300' 
                        : isPrev || isNext 
                          ? 'h-80 w-80 scale-90 z-10 opacity-70' 
                          : 'h-72 w-72 scale-75 z-0 opacity-40'
                      }
                      flex flex-col items-center m-4
                    `}
                  >
                      <Image
                        className="rounded-full object-cover aspect-square my-2 mx-auto border-4 border-gray-200 shadow-lg w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                        src={`${review.image}`}
                        alt="Review Image"
                        width={192}
                        height={192}
                      />
                    <div className="hidden sm:block absolute -top-4 -right-8 lg:-top-10 lg:-right-2 h-16 w-16 z-50">
                      <Image src={"/kisspng-computer-icons-quotation-citation-symbol-quote-5abfbdc0180467.3892997615225153920984.png"} alt={""} fill={true} objectFit="cover"></Image>
                    </div>
                    <div className="relative w-3/4 flex justify-center">
                      <Image src={"/kisspng-star-system-confess-clip-art-star-rating-5aeed30a615e99.1344166615256010343988.png"} alt={""} height="200" width="200" objectFit="cover"></Image>
                    </div>
                    <div className={`h-10 w-full ${review.bgColor} text-white flex items-center justify-center my-2 transition-all duration-700`}>
                      {review.author}
                    </div>
                    <p className="text-sm lg:text-lg font-mono text-black max-w-80 p-2">{review.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Book now!! */}
      <div className="flex justify-around flex-row items-center mb-12">
        <div className="bg-yellow-400 text-xl rounded-full text-white px-12 py-4 border-1 border-grey-200 cursor-pointer font-mono drop-shadow-md">
          <Link href="/book">Book Now!</Link>
        </div>
      </div>
    </main >
  )
}