export default function CardInterativo({ titulo, texto, textoBotao, botaoExterno }) {
  return (
    <div className="card-interativo flex flex-col p-4 border-solid border-2 bg-slate-700 border-slate-700 rounded-xl w-64 h-fit justify-center px-4 gap-2">
      <h3 className="text-xl font-semibold text-white">{titulo}</h3>
      <p className="text-white rounded-full font-light text-sm w-fit">
        {texto}
      </p>
      {botaoExterno}
      {textoBotao && (
        <button className="bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold text-sm w-fit mt-4" onClick={() => alert("Você clicou")}>
          {textoBotao}
        </button>
      )}
    </div>
  );
}
