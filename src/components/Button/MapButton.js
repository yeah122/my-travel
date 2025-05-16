import { Map } from "lucide-react";
import Button from "@/components/Button/Button"

export default function MapButton() {
    // TODO map 팝업 화면으로 이동
    const onClick = e => {        
        alert("맵 팝업 띄우기")
    }

    return (
        <div className="fixed bottom-15 right-10 z-50">
            <Button
                state="shadow"
                width="none"
                round="full"
                onClick={onClick}>
                <Map size={20} />
            </Button>
        </div>
    )
}