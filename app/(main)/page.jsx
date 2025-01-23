import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to the Editor Hub</h1>
      <p className="text-lg text-gray-600 mb-8">
        Select an editor below to start working:
      </p>
      <div className="flex flex-col gap-4">
        <Link
          href="/quill"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Go to Quill Editor
        </Link>
        <Link
          href="/slate"
          className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
        >
          Go to Slate Editor
        </Link>
      </div>
    </div>
  );
}
