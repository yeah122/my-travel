'use client'

import { Plus } from "lucide-react";

export default function PlusButton() {
    const onClick = e => {
        console.log("B")
    }

    return (
        <div className="fixed bottom-15 left-10 z-50">
            <button className="text-2xl bg-white rounded-full shadow-md p-2 hover:bg-gray-200"
                onClick={onClick}>
                <Plus size={20} />
            </button>
        </div>
    )
}
