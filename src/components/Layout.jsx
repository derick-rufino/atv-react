export default function Layout({
  headerTitle,
  mainHeading,
  mainContent,
  footerContent,
}) {
  return (
    <>
      <header>
        <h1>{headerTitle}</h1>
      </header>
      <main>
        {mainHeading}
        <div>{mainContent}</div>
      </main>
      <footer>{footerContent}</footer>
    </>
  );
}
