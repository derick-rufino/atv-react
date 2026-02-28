import Layout from "../../../components/Layout";
import PerfilUsuario from "../../../components/PerfilUsuario";

const backlinkListaExercicios = "../exercicios";

export default function Atividade1() {
  const users = [
    { nome: "Derick", idade: 21, cidade: "São Paulo" },
    { nome: "Clara", idade: 21, cidade: "Rio de Janeiro" },
    { nome: "Ana Julia", idade: 20, cidade: "Belo Horizonte" },
  ];
  return (
    <Layout
      backLink={backlinkListaExercicios}
      headerTitle="Atividade 1"
      mainHeading={"Cards Perfil de Usuário com Props"}
      mainContent={
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user, index) => (
            <PerfilUsuario key={index} {...user} />
          ))}
        </div>
      }
    />
  );
}
