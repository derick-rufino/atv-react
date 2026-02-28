export default function ListaTarefas() {
  const tarefas = [
    { id: 1, descricao: "Comprar leite", status: "pendente" },
    { id: 2, descricao: "Lavar o carro", status: "pendente" },
    { id: 3, descricao: "Estudar React", status: "concluido" },
  ];

  return (
    <div>
      <ul className="rounded-2xl bg-slate-300 flex flex-col gap-4 p-6">
        <h2 className="text-xl font-bold">Lista de Tarefas</h2>
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className="flex items-center gap-2 justify-between rounded-xl bg-slate-100 p-4"
          >
            <p className="flex gap-4">
              <span>{tarefa.id}</span>
              <span>{tarefa.descricao}</span>
            </p>

            <span
              className={`font-medium uppercase px-2 py-1 rounded-full border-solid border-2 text-xs ${tarefa.status === "concluido" ? "text-green-900 bg-green-100  border-green-700 " : "text-orange-900 bg-orange-100 border-orange-700"}`}
            >
              {tarefa.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
