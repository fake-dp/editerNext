"use client";

import React, { useEffect, useRef } from "react";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function ToastEditorComponent() {
  const editorRef = useRef(null); // Editor 인스턴스를 참조하기 위한 ref

  useEffect(() => {
    if (editorRef.current) {
      const editor = new Editor({
        el: editorRef.current, // Editor를 렌더링할 DOM 엘리먼트
        initialEditType: "markdown", // 초기 편집 모드 (markdown 또는 wysiwyg)
        previewStyle: "vertical", // 미리보기 스타일 (vertical 또는 tab)
        height: "500px", // 에디터 높이
        initialValue: "Start writing your content here...", // 초기 콘텐츠
        toolbarItems: [
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task"],
          ["table", "link"],
          ["image", "code", "codeblock"],
        ],
      });

      console.log("Markdown:", editor.getMarkdown());
      console.log("HTML:", editor.getHTML());
    }
  }, []);

  return <div ref={editorRef} />;
}
