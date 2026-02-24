import Banner from "./components/Banner";
import NomeAluno from "./components/NomeAluno";
import FraseDoDia from "./components/FraseDoDia";
import Layout from "./components/Layout";
import Card from "./components/Card";

function App() {
  const members = [
    { name: "Derick Rufino", role: "Desenvolvedor Front-end" },
    { name: "Ana Julia", role: "Documentação" },
    { name: "Clara Gabriele", role: "Banco de Dados" },
  ];
  return (
    <div className="min-h-screen min-w-full bg-gray-100 text-gray-800">
      <Banner />
      <Layout
        headerTitle="Atividade React"
        mainHeading="Bem-vindo à atividade React!"
        mainContent={
          <>
            {/* Hoje aprendi que expressões JSX em um onjeto prop devem estar encapsuladas em um elemento pai, como uma div ou um fragmento vazio kkkkk estranho */}
            <NomeAluno />
            <FraseDoDia />
            {members.forEach((elem) => (
              <Card name={elem.name} role={elem.role} />
            ))}
          </>
        }
        footerContent="Desenvolvido por Derick Rufino - 2026"
      ></Layout>
    </div>
  );
}

export default App;
