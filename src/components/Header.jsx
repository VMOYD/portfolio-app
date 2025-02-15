import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className="fixed top-0 z-50 glass flex flex-row w-full"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        border: "none",
        borderRadius: "unset",
        height: "6rem",
      }}
    >
      <h1 className="text-xl font-bold text-gray-900 dark:text-white items-start">
        🚀 Vyom&apos;s Portfolio
      </h1>
      <nav className="flex space-x-6 items-end">
        {["Home","About", "Projects", "Contact"].map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            className="text-2xl font-semibold text-gray-600 dark:text-gray-300 neon-text"
            style={{ margin: "0 1rem" }}
          >
            {link}
          </a>
        ))}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 text-xl"
          style={{ marginLeft: "1rem" }}
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
