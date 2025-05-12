import { forwardRef, useImperativeHandle, useRef } from "react";

// 커스텀 컴포넌트는 ref로 제어하기 위해서는 forwardRef 사용해야 한다. 일반 함수 컴포넌트는 ref가 존재하지 않는다.
const Tooltip = forwardRef((_, ref) => {
    const tooltipEl = useRef();

    // useImperativeHandle: 상위 컴포넌트가 하위 컴포넌트의 핸들러 호출, 상태 변경 등을 위해 접근할 때 사용. 
    useImperativeHandle(ref, () => ({
        show: (text) => {
            const el = tooltipEl.current;
            el.textContent = text;
            el.style.display = "block";
        },
        hide: () => {
            tooltipEl.current.style.display = "none";
        },
    }));

    return (
        <div
            ref={tooltipEl}
            className="absolute top-4 left-1/2 -translate-x-1/2 bg-stone-600 text-sm text-white px-4 py-1 rounded-full shadow">
        </div>
        // <div
        //   ref={tooltipEl}
        //   className="absolute z-10 bg-white text-sm text-gray-800 px-3 py-1 rounded shadow pointer-events-none"
        //   style={{ display: "none", transform: "translate(-50%, -100%)" }}
        // />
    );
});

export default Tooltip;
