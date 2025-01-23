import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">에디터 모음</h1>
      <p className="text-lg text-gray-600 mb-8">
        아래 에디터 라이브러리 모음입니다
      </p>
      <div className="flex flex-col gap-4">
        <Link
          href="/quill"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Quill Editor
        </Link>

        <Link
          href="/jodit"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Jodit Editor
        </Link>

        <Link
          href="/toast"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Toast Editor
        </Link>

        <Link
          href="/tiptop"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Tiptop Editor
        </Link>


        <div className="border-t border-gray-300 my-4"></div>
        <Link
          href="/draft"
          className="px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          Draft Editor
        </Link>
        <Link
          href="/tiny"
          className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
        >
          Tiny Editor
        </Link>
        <Link
          href="/cke"
          className="px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition"
        >
          CKE Editor
        </Link>
        <Link
          href="/slate"
          className="px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition"
        >
          Slate Editor
        </Link>

      </div>
    </div>
  );
}
