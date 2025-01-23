"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";

// JoditEditor를 동적 로딩하여 SSR 비활성화
const JoditEditor = dynamic(() => import("jodit-react").then((mod) => mod.default), {
  ssr: false, // SSR 비활성화
});

export default function JoditEditorComponent() {
  const editor = useRef(null);
  const [content, setContent] = React.useState("");

  const config = {
    readonly: false, // 읽기 전용 모드 비활성화
    height: 400,
    toolbar: true, // 툴바 활성화
    uploader: {
      insertImageAsBase64URI: true, // 이미지 업로드를 Base64로 처리
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Jodit Editor</h1>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex 설정
          onBlur={(newContent) => setContent(newContent)} // 에디터 내용 저장
        />
      </div>
    </div>
  );
}
