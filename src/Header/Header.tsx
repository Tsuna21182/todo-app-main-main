import DarkMode from "../Darkmode/DarkMode";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header
      className={`${
        darkMode
          ? "bg-[url(/images/bg-mobile-dark.jpg)] md:bg-[url(/images/bg-desktop-dark.jpg)]"
          : "bg-[url(/images/bg-mobile-light.jpg)] md:bg-[url(/images/bg-desktop-light.jpg)]"
      } bg-no-repeat bg-center bg-cover  p-5 h-50`}
    >
      <div className="flex justify-between mt-5 sm:justify-evenly">
        <h1 className="text-VeryLightGray uppercase text-2xl tracking-[0.5rem] font-bold">
          Todo
        </h1>
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
}

export default Header;
