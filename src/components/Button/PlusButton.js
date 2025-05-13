'use client'

import { Plus } from "lucide-react";
import Button from "@/components/Button/Button"

export default function PlusButton() {
    // TODO write 글쓰기 화면으로 이동
    const onClick = e => {
        console.log("B")
    }

    return (
        <div className="fixed bottom-15 left-10 z-50">
            <Button
                state="shadow"
                width="none"
                round="full"
                onClick={onClick}>
                <Plus size={20} />
            </Button>
        </div>
    )
}
