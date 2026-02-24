export default function Card({ name, role, badgeColor }) {
  return (
    <div
      className="card flex flex-col
    p-2 border-solid border-2 bg-slate-200 border-slate-700 rounded-xl w-64 h-28 justify-center px-4 gap-2"
    >
      <h3 className="text-xl font-semibold">{name}</h3>
      <p
        className={`${badgeColor} text-slate-100 py-1 px-4 rounded-full font-light text-sm w-fit`}
      >
        {role}
      </p>
    </div>
  );
}
