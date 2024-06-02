import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300";

  const styles = {
    primary: `${base} px-4 py-3 md:px-6 md:py-4`,
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    secondary:
      "inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 duration-300 hover:text-stone-600 hover:border-stone-500 focus:outline-none focus:ring focus:ring-stone-400 focus:ring-offset-2 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
