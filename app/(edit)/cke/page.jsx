"use client";

import dynamic from "next/dynamic";

// CKEditor 동적 import
const CKEditor = dynamic(() => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor), { ssr: false });
const ClassicEditor = dynamic(() => import("@ckeditor/ckeditor5-build-classic"), { ssr: false });

export default function SimpleCKEditor() {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData(); // 에디터 데이터 가져오기
    console.log(data); // 콘솔에 출력
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-blue-500 text-white text-center py-4">
          <h1 className="text-2xl font-bold">CKEditor Example</h1>
        </div>
        <div className="p-6">
          <CKEditor
            editor={ClassicEditor}
            data="<p>Type your content here...</p>" // 초기 내용
            onChange={handleEditorChange}
          />
        </div>
      </div>
    </div>
  );
}
