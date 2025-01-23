"use client";

import React, { useEffect, useRef } from "react";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function ToastEditor() {
  const editorRef = useRef(null); // Editor 인스턴스를 참조하기 위한 ref

  useEffect(() => {
    // Toast UI Editor 초기화
    if (editorRef.current) {
      const editor = new Editor({
        el: editorRef.current, // Editor를 렌더링할 DOM 엘리먼트
        initialEditType: "markdown", // 초기 편집 모드 (markdown 또는 wysiwyg)
        previewStyle: "vertical", // 미리보기 스타일 (vertical 또는 tab)
        height: "500px", // 에디터 높이
        initialValue: "Start writing your content here...", // 초기 콘텐츠
        toolbarItems: [
          // 툴바 구성
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task"],
          ["table", "link"],
          ["image", "code", "codeblock"],
        ],
      });

      // 필요하다면, 에디터 데이터를 가져올 수 있습니다.
      editor.getMarkdown(); // Markdown 형식으로 내용 가져오기
      editor.getHTML(); // HTML 형식으로 내용 가져오기
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Toast UI Editor</h1>
        {/* Toast UI Editor가 렌더링될 엘리먼트 */}
        <div ref={editorRef} />
      </div>
    </div>
  );
}
