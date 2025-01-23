/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // app 디렉토리 내 파일들
    "./components/**/*.{js,ts,jsx,tsx}", // components 디렉토리 내 파일들
    "./pages/**/*.{js,ts,jsx,tsx}", // pages 디렉토리 내 파일들
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
