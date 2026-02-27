import { useEffect, useState } from "react";

import Banner from "./components/Banner";
import NomeAluno from "./components/NomeAluno";
import FraseDoDia from "./components/FraseDoDia";
import Layout from "./components/Layout";
import Card from "./components/Card";
import { Link } from "react-router";


function App() {
  const [isShown, setIsShown] = useState(false);

  const members = [
    {
      name: "Derick Rufino",
      role: "Desenvolvedor Front-end",
      badgeColor: "bg-teal-700",
    },
    { name: "Ana Julia", role: "Documentação", badgeColor: "bg-green-900" },
    {
      name: "Clara Gabriele",
      role: "Banco de Dados",
      badgeColor: "bg-cyan-900",
    },
    {
      name: "Guilherme Matchin",
      role: "Backend",
      badgeColor: "bg-blue-800",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, 5000);
  });


  return (
    <div className="min-h-screen h-fit bg-gray-100 text-gray-800 flex flex-col items-center max-w-[1080px] m-auto gap-0">
      {isShown && <Banner />}
      <Layout
        headerTitle="Atividade React"
        mainHeading="Frase do dia e Cards"
        mainContent={
          <>
            {/* Hoje aprendi que expressões JSX em um onjeto prop devem estar encapsuladas em um elemento pai, como uma div ou um fragmento vazio kkkkk estranho */}
            <div className="px-4 py-6 rounded-xl border-solid border-slate-800 border-2 mb-12">
              <FraseDoDia />
              <NomeAluno />
            </div>
            <div className="flex gap-8 flex-wrap bg-">
              {members.map((elem) => (
                <Card
                  key={elem.name}
                  name={elem.name}
                  role={elem.role}
                  badgeColor={elem.badgeColor}
                />
              ))}
            </div>
              <div className="links mt-8 flex gap-8 flex-wrap">
                <Link to="/aula-props" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Aula Props
                </Link>
                <Link to="/exercicios" className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors">
                  Exercícios
                </Link>
                </div>
          </>
        }
        footerContent="Desenvolvido por Derick Rufino - 2026"
      ></Layout>
    </div>
  );
}

export default App;
