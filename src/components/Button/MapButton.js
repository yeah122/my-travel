'use client'

import { Map } from "lucide-react";

export default function MapButton() {
    const onClick = e => {
        console.log("A")
    }

    return (
        <div className="fixed bottom-15 right-10 z-50">
            <button className="text-2xl bg-white rounded-full shadow-md p-2 hover:bg-gray-200"
                onClick={onClick}>
                <Map size={20} />
            </button>
        </div>
    )
}