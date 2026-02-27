export default function Layout({
  headerTitle,
  mainHeading,
  mainContent,
  footerContent,
}) {
  return (
    <div className="layout w-full h-full">
      <header className="w-full bg-slate-300">
        <h1 className="text-2xl px-12 py-4 text-slate-950 font-semibold">{headerTitle}</h1>
      </header>
      <main className="px-12 py-4 min-h-[80vh] h-fit bg-slate-50 text-slate-900">
        {mainHeading}
        <div className="mt-4">{mainContent}</div>
      </main>
      {footerContent && <footer className="px-12 py-4 bg-slate-300 sticky bottom-0">{footerContent}</footer>}
    </div>
  );
}
