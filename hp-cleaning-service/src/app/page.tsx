import { Navbar } from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-blue-400">
      <div className="z-10 w-full items-center justify-between font-mono text-xl lg:flex">
        <p>High Power Cleaning Service</p>
        <Navbar />
      </div>
    </main>
  )
}
