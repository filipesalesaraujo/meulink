import "./links.css";
import { useState, useEffect } from "react";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { deleteLink, getLinksSave } from "../../services/storeLinks";
import LinkItem from "../../components/LinkItem";

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("@link");
      if (result.lenght === 0) {
        setEmptyList(true);
      }
      setMyLinks(result);
    }
    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id);
    if (result.lenght === 0) {
      setEmptyList(true);
    }
    setMyLinks(result);
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Links</h1>
      </div>
      {emptyList && (
        <div className="empty-list">
          <h2 className="empty-text">Sua lista está vazia</h2>
        </div>
      )}
      {myLinks.map((link) => (
        <div key={link.id} className="links-item">
          <button onClick={() => handleOpenLink(link)} className="link">
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>
          <button onClick={() => handleDelete(link.id)} className="link-delete">
            <FiTrash size={24} color="#ff5454" />
          </button>
        </div>
      ))}
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
