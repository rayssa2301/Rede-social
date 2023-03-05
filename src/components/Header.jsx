import "./Header.module.css";
import styleSheet from "./Header.module.css";
import IgniteLogo from "../assets/ignite-simbol.svg";

export function Header() {
  return (
    <header className={styleSheet.header}>
      <img src={IgniteLogo} alt="Ignite Logo" />
    </header>
  );
}
