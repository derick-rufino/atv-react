import { Link } from "react-router";

export default function Layout({
  backLink,
  headerTitle,
  mainHeading,
  mainContent,
  footerContent,
}) {
  return (
    <div className="layout w-full h-full">
      <header className="w-full bg-slate-300 flex items-center px-8 py-4 gap-4">
        {backLink && (
          <Link to={backLink}>
            <button className="px-2 py-2 bg-cyan-700 text-slate-50 rounded-xl hover:bg-cyan-800 transition-colors duration-150" title="Voltar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        )}
        <h1 className="text-2xl text-slate-950 font-semibold">
          {headerTitle}
        </h1>
      </header>
      <main className="px-12 py-4 min-h-[80vh] h-[calc(100vh-90px)] bg-slate-50 text-slate-900">
        {mainHeading}
        <div className="mt-4">{mainContent}</div>
      </main>
      {footerContent && (
        <footer className="px-12 py-4 bg-slate-300">{footerContent}</footer>
      )}
    </div>
  );
}
