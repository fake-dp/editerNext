"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TipTapEditor() {
  // TipTap 에디터 초기화
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>연결만 했고 툴바는 커스텀으로 해야함.. 한정적임 결제해야함</p>", // 초기 내용
    editorProps: {
      // 서버사이드 렌더링 문제 방지
      handleDOMEvents: {
        beforeinput: () => false,
      },
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center mb-4">TipTap Editor</h1>
        <EditorContent editor={editor} className="border p-4 rounded-lg" />
      </div>
    </div>
  );
}
