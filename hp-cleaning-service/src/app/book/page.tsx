import Image from "next/image";
import React from "react";

export default function Book () {

    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="bg-white border-l-4 border-blue-400">
                <div className="flex flex-row">
                <Image src="/cleaning-service-3666011_1280.png" alt="Hp Cleaning Service" priority width={200} height={200} />
                <p>Booking info</p>
                <p>Date / Time</p>
                </div>
                <div className="flex flex-row">
                    <p>Booking description and plan.</p>
                    <p>Plans.</p>
                </div>
            </div>
        </main>
    )
}