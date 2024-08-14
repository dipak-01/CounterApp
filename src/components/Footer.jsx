export default function Footer({ isDarkMode }) {
  return (
    <>
      <footer
        className={`  rounded-b-xl border      p-4 px-8 flex align-middle items-center justify-center ${
          isDarkMode
            ? "bg-gray-900 border-t-neutral-50  text-white"
            : "bg-teal-100  border-t-neutral-900 "
        }`}
      >
        Made with ❤️ by dk
         
      </footer>
    </>
  );
}
