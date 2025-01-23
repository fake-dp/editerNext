"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // React Quill 스타일

// Dynamic import to avoid SSR issues with react-quill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function QuillEditor() {
  const [content, setContent] = useState(""); // 에디터 내용 상태 관리

  // 에디터 내용 변경 핸들러
  const handleContentChange = (value) => {
    setContent(value);
  };

  // 커스텀 툴바 옵션
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // 헤더 크기
      ["bold", "italic", "underline", "strike"], // 텍스트 포맷
      [{ list: "ordered" }, { list: "bullet" }], // 리스트 옵션
      ["link", "image"], // 링크 및 이미지
      ["clean"], // 포맷 초기화
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* 헤더 */}
        <div className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Quill Editor</h1>
          <p className="text-sm mt-1">무난함 많이 사용함</p>
        </div>

        {/* 에디터 */}
        <div className="p-6">
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            theme="snow" // 기본 테마
            modules={modules} // 커스텀 툴바
            formats={formats} // 허용 포맷
            className="border rounded-md bg-white"
          />
        </div>

        {/* 출력 */}
        <div className="bg-gray-50 p-6 border-t">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            출력 결과:
          </h2>
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
}
