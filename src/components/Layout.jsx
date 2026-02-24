export default function Layout({
  headerTitle,
  mainHeading,
  mainContent,
  footerContent,
}) {
  return (
    <div className="layout w-full h-full">
      <header className="w-full bg-slate-300">
        <h1 className="text-2xl px-12 py-4">{headerTitle}</h1>
      </header>
      <main className="px-12 py-4 h-[80dvh]">
        {mainHeading}
        <div className="mt-4">{mainContent}</div>
      </main>
      <footer className="px-12 py-4 bg-slate-300">{footerContent}</footer>
    </div>
  );
}
