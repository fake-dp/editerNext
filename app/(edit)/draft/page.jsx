"use client";

import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

export default function DraftEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // 텍스트 스타일 변경
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  // 블록 스타일 토글
  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  // 인라인 스타일 토글
  const toggleInlineStyle = (inlineStyle) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* 헤더 */}
        <div className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-2xl font-bold">Draft.js Editor</h1>
          <p className="text-sm mt-1">커스텀 가능한데 찾아볼게 너무 많음...</p>
        </div>

        {/* 툴바 */}
        <div className="p-4 border-b bg-gray-50 flex gap-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onMouseDown={(e) => {
              e.preventDefault();
              toggleInlineStyle("BOLD");
            }}
          >
            Bold
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onMouseDown={(e) => {
              e.preventDefault();
              toggleInlineStyle("ITALIC");
            }}
          >
            Italic
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onMouseDown={(e) => {
              e.preventDefault();
              toggleBlockType("blockquote");
            }}
          >
            Blockquote
          </button>
        </div>

        {/* 에디터 */}
        <div className="p-6">
          <div
            className="border border-gray-300 rounded-md p-4 min-h-[200px] focus:outline-none"
            onClick={() => editorRef.current.focus()}
          >
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              placeholder="Start typing your content..."
            />
          </div>
        </div>

        {/* 출력 */}
        <div className="bg-gray-50 p-6 border-t">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Editor Content:
          </h2>
          <pre className="bg-gray-100 p-4 rounded-md text-gray-800">
            {JSON.stringify(editorState.getCurrentContent().getPlainText(), null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
