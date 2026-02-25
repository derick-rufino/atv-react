export default function Banner() {
  return (
    <div className="banner w-full flex h-12 bg-cyan-700">
      <a
        href="https://github.com/derick-rufino/atv-react"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full font-semibold text-white text-xl items-center px-2 gap-2"
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          className="github-logo aspect-square max-w-8 rounded-lg"
        />
        Visite o Repositório
      </a>
      
    </div>
  );
}
