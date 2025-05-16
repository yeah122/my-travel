'use client'

import Button from "@/components/Button/Button";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function PlusButton() {
    const router = useRouter()
    const param = useParams()

    const onClick = e => {
        const path = "/write" + (param.sigungu ? `?sigungu=${param.sigungu}` : "")
        router.push(path)
        // console.log(router)
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
