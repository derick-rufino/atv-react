export default function PerfilUsuario({ nome, idade, cidade }) {
  return (
    <div className="perfil-usuario p-4 bg-slate-100 rounded-lg ">
      <h1 className="text-xl font-bold text-slate-800">{nome}</h1>
      <p className="text-sm text-slate-600">Idade: {idade}</p>
      <p className="text-sm text-slate-600">Cidade: {cidade}</p>
    </div>
  );
}
