import { Link } from "react-router";

export const Header = ({ title = "Pokedex 2025 Tercero" }) => {
  return (
<header className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-xl shadow-red-900/40 sticky top-0 z-50 border-b-4 border-yellow-300">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    <h1 className="text-2xl font-extrabold tracking-wider drop-shadow-lg text-white">
      {title}
    </h1>

    <nav>
      <ul className="flex gap-4 items-center">
        <li>
          <Link
            to="/"
            className="inline-block px-6 py-2 text-sm font-bold rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            Inicio
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
  );
};
