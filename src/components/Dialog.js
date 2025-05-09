// components/common/LoadingDialog.jsx
import React from "react";

export default function LoadingDialog({ visible, text = "로딩 중..." }) {
  if (!visible) return null;

  // TODO header, footer(button) 영역 추가
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="bg-white rounded-xl px-6 py-4 shadow-lg text-gray-800 text-center"
        style={{ width: "300px" }}
      >
        <span className="text-lg font-medium">{text}</span>
      </div>
    </div>
  );
}
