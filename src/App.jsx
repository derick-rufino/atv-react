import { useEffect, useState } from "react";

import Banner from "./components/Banner";
import NomeAluno from "./components/NomeAluno";
import FraseDoDia from "./components/FraseDoDia";
import Layout from "./components/Layout";
import Card from "./components/Card";
import CardInterativo from "./components/CardInterativo";
import MyButton from "./components/MyButton";

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

  function comprar() {
    alert("Produto comprado com sucesso!");
  }

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
            <div className="mt-8 flex gap-8 flex-wrap">
              <CardInterativo
                titulo="Card Interativo"
                texto="Este é um card interativo"
                textoBotao="Clique aqui"
              />

              <CardInterativo
                titulo="Card sem botão"
                texto="Este card não tem um botão"
              />
              <CardInterativo
                titulo="Card com botão externo"
                texto="Este card tem um botão externo (componente separado)"
                botaoExterno={<MyButton action={comprar}>Comprar</MyButton>}
              ></CardInterativo>
            </div>
          </>
        }
        footerContent="Desenvolvido por Derick Rufino - 2026"
      ></Layout>
    </div>
  );
}

export default App;
