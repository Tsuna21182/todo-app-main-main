type DarkModeProps = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

function DarkMode({ darkMode, setDarkMode }: DarkModeProps) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 text-white"
    >
      <span>
        {darkMode ? (
          <img src="/images/icon-sun.svg" alt="icono boton" />
        ) : (
          <img src="/images/icon-moon.svg" alt="icono boton" />
        )}
      </span>
    </button>
  );
}

export default DarkMode;
