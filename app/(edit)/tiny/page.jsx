"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

export default function TinyMCEEditor() {
  const [content, setContent] = useState("<p>Start typing here...</p>"); // 에디터 상태 관리

  const handleEditorChange = (newContent) => {
    setContent(newContent); // 에디터 내용 업데이트
    console.log(newContent); // 에디터 내용을 콘솔에 출력
  };

  const handleClearContent = () => {
    setContent(""); // 에디터 내용 초기화
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center mb-4">TinyMCE Editor</h1>
        {/* 에디터 */}
        <Editor
          value={content} // 상태를 기반으로 에디터 내용 설정
          onEditorChange={handleEditorChange} // 내용 변경 핸들러
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help",
          }}
        />
        {/* 버튼 */}
        <div className="mt-4 text-center">
          <button
            onClick={handleClearContent} // 내용 초기화 핸들러
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          >
            Clear Content
          </button>
        </div>
      </div>
    </div>
  );
}
