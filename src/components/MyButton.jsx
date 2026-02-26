export default function MyButton({ children, action }) {
  return (
    <button
      className="bg-amber-600 text-white py-2 px-8 rounded-lg font-semibold text-sm w-fit max-h-12 "
      onClick={action}
    >
      {children}
    </button>
  );
}
