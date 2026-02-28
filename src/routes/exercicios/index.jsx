import { Link } from "react-router";
import Layout from "../../components/Layout";


const backlinkHome = "../../"; // Caminho relativo para a página inicial (não seleciona nenhum arquivo) [novo aprenizado tbm kkkk]

const exercises = [
  {
    id: "01",
    title: "Perfil de Usuário",
    description:
      "Criação de um componente de perfil utilizando props para exibir informações do usuário.",
    path: "/exercicios/ex-1",
    status: "disponível",
  },
  {
    id: "02",
    title: "Lista de Tarefas",
    description:
      "Criação de um componente de lista de tarefas utilizando props para exibir informações das tarefas.",
    path: "/exercicios/ex-2",
    status: "disponível",
  },
  {
    id: "03",
    title: "Catálogo de Cursos",
    description: "Criação de um catálogo de cursos com botão de inscrição.",

    path: "/exercicios/ex-3",
    status: "disponível",
  },
];

function ExerciseCard({ id, title, description, path, status }) {
  const available = status === "disponível";

  return (
    <Link
      to={available ? path : "exercicio-perfil-usuario"}
      className={`group block border-2 border-slate-200 rounded-lg p-6 transition-colors duration-150 ${
        available
          ? "hover:cursor-pointer"
          : "opacity-50 cursor-not-allowed pointer-events-none"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-mono font-semibold tracking-widest text-slate-400 uppercase">
          Ex {id}
        </span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
            available
              ? "border-teal-600 text-teal-700 bg-teal-50"
              : "border-slate-300 text-slate-400 bg-slate-100"
          }`}
        >
          {status}
        </span>
      </div>

      <h2 className="text-lg font-semibold text-slate-900 mb-2 group-hover:underline underline-offset-2">
        {title}
      </h2>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>

      {available && (
        <div className="mt-6 flex items-center gap-1 text-sm font-medium text-slate-700">
          Abrir exercício
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-150 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      )}
    </Link>
  );
}

export default function Exercicios() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center max-w-[1080px] m-auto">
      <Layout
        headerTitle="Exercícios"
        backLink={backlinkHome}
        mainHeading={
          <div className="border-b-2 border-slate-200 pb-6 mb-2">
            <p className="text-xs font-mono font-semibold tracking-widest text-slate-400 uppercase mb-2">
              Web III — React
            </p>
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">
              Lista de Exercícios
            </h1>
            <p className="mt-2 text-slate-500 text-sm">
              {exercises.length} exercício{exercises.length !== 1 ? "s" : ""} no
              total
            </p>
          </div>
        }
        mainContent={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercises.map((ex) => (
              <ExerciseCard key={ex.id} {...ex} />
            ))}
          </div>
        }
      />
    </div>
  );
}
