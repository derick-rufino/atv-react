export default function Atividade1(){
    const users = [
        { nome: "Derick", idade: 25, cidade: "São Paulo" },
        { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
        { nome: "João", idade: 22, cidade: "Belo Horizonte" },
      ];
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <PerfilUsuario key={index} {...user} />
        ))}
      </div>
    );
  }