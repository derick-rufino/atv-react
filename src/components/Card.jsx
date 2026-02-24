export default function Card({ title, role }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{role}</p>
    </div>
  );
}