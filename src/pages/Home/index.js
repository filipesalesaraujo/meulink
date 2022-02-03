import { useState } from "react";
import { FiLink } from "react-icons/fi";

import "./home.css";

import Menu from "../../components/Menu/index";
import LinkItem from "../../components/LinkItem";
import api from "../../services/api";

export default function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", { long_url: link });
      setData(response.data);
      setShowModal(true);
      setLink("");
    } catch {
      alert("Erro ao encurtar o link");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Logo" alt="logo" />
        <h1>Meulink</h1>
        <span>Cole seu link para encurtar</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="text"
            placeholder="Cole seu link aqui..."
          />
        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>
      <Menu />
      {showModal && <LinkItem closeModal={() => setShowModal(false)} content={data} />}
    </div>
  );
}
