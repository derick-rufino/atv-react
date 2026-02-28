import { Link } from "react-router";
import Layout from "../../../components/Layout";
import ListaTarefas from "../../../components/ListaTarefas";

const backlinkListaExercicios = "../exercicios";

export default function Atividade2() {
  return (
    <Layout
      backLink={backlinkListaExercicios}
      headerTitle="Atividade 2"
      mainHeading={"Lista de Tarefas usando Key e Map"}
      mainContent={<ListaTarefas />}
    />
  );
}
