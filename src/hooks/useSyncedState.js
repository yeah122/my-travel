import React from "react";

/**
 * 상태 업데이트 및 외부 onChange에 최신 값 전달
 *
 * @param {any} initialState - 초기 상태
 * @param {(value: any) => void} [onChange] - 상태가 변경될 때 호출할 외부 콜백
 * @returns {[any, function]} - [상태 값, 업데이트 함수]
 */
export function useSyncedState(initialState, onChange) {
  const [state, setState] = React.useState(initialState);

  const updateState = React.useCallback((updater) => {
    setState(prev =>
      typeof updater === "function" ? updater(prev) : updater
    );
  }, []);

  // 렌더링 중 onChange 호출 방지
  const lastValue = React.useRef(state);

  React.useEffect(() => {
    if (onChange && lastValue.current !== state) {
      onChange(state);
      lastValue.current = state;
    }
  }, [state, onChange]);

  return [state, updateState];
}
