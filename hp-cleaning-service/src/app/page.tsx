import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-400">
      <div className="z-10 max-w-5xl w-full items-center justify-between  font-mono text-xl lg:flex">
        <p>High Power Cleaning Service</p>
        <p>Anything that can be cleaned will be cleaned...</p>
      </div>
      <Image src='/pexels-tope-a-asokere-5789363.jpg' alt={''} height="400" width="400" />
    </main>
  )
}
