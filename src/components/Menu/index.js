import "./menu.css";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://github.com/filipesalesaraujo">
        <BsGithub size={24} color="#fff" />
      </a>
      <Link className="menu-item" to="/links">Links</Link>
    </div>
  );
}
