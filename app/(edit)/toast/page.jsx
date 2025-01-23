"use client";

import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";

// Toast UI Editor를 동적으로 로드하며 SSR 비활성화
const DynamicToastEditor = dynamic(() => import("./ToastEditorComponent"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Toast UI Editor</h1>
        <DynamicToastEditor />
      </div>
    </div>
  );
}
