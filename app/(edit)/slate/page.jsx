"use client";

import React, { useMemo, useState } from "react";
import { createEditor, Transforms, Editor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

// 툴바 버튼 컴포넌트
const ToolbarButton = ({ format, icon, editor }) => {
  const isActive = isMarkActive(editor, format);

  return (
    <button
      className={`px-4 py-2 rounded ${
        isActive ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-700"
      }`}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </button>
  );
};

// 마크 토글 함수
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

// 현재 마크 활성 상태 확인
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export default function SlateEditor() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "Start typing here..." }],
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* 헤더 */}
        <div className="bg-indigo-500 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Slate Editor</h1>
          <p className="text-sm mt-1">찾아 볼게 너무 많음 별로인거같음</p>
        </div>

        {/* 툴바 */}
        <div className="p-4 border-b bg-gray-50 flex gap-2">
          <ToolbarButton editor={editor} format="bold" icon="B" />
          <ToolbarButton editor={editor} format="italic" icon="I" />
          <ToolbarButton editor={editor} format="underline" icon="U" />
        </div>

        {/* 에디터 */}
        <div className="p-6">
          <Slate
            editor={editor}
            initialValue={value}
            onChange={(newValue) => setValue(newValue)}
          >
            <Editable
              className="border border-gray-300 rounded-md p-4 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Start typing your content..."
            />
          </Slate>
        </div>

        {/* 출력 */}
        <div className="bg-gray-50 p-6 border-t">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Editor Output:
          </h2>
          <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
            {JSON.stringify(value, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
