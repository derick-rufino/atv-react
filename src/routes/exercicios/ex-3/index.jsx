import Layout from "../../../components/Layout";

const backlinkListaExercicios = "../exercicios";

function CardCurso({ id, titulo, horas, onInscrever }) {
  return (
    <div className="border-2 border-slate-200 rounded-lg p-6 mb-4">
      <span className="text-xs font-mono text-slate-400">{id}</span>
      <h3 className="text-lg font-semibold text-slate-900">{titulo}</h3>
      <p className="text-sm text-slate-500 mb-4">{horas} horas</p>
      <button
        onClick={() => onInscrever(titulo)}
        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-150"
      >
        Inscrever
      </button>
    </div>
  );
}

export default function Atividade3() {
  const cursos = [
    {
      id: 1,
      titulo: "React Básico",
      horas: 10,
    },
    {
      id: 2,
      titulo: "React Avançado",
      horas: 15,
    },
    {
      id: 3,
      titulo: "React com TypeScript",
      horas: 20,
    },
  ];

  return (
    <Layout
      backLink={backlinkListaExercicios}
      headerTitle={"Atividade 3"}
      mainHeading={"Catálogo com botão (props + map + onClick)"}
      mainContent={cursos.map((curso) => (
        <CardCurso
          key={curso.id}
          titulo={curso.titulo}
          horas={curso.horas}
          onInscrever={(titulo) => alert(`Inscrito no curso: ${titulo}`)}
        />
      ))}
    />
  );
}
