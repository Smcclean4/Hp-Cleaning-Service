import { Navbar } from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center justify-between text-left lg:text-center font-mono text-xl p-6 lg:flex bg-blue-500 text-white">
        <p>High Power <br></br>Cleaning Service</p>
        <Navbar />
      </div>
    </main>
  )
}
