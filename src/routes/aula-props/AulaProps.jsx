
import CardInterativo from "../../components/CardInterativo";
import MyButton from "../../components/MyButton";
import Layout from "../../components/Layout";

export default function AulaProps() {
  function comprar() {
    alert("Produto comprado com sucesso!");
  }

  return (
    <Layout headerTitle={"React"} mainHeading={"Aula Props"} mainContent={
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
    } footerContent={""} />
   
  );
}
