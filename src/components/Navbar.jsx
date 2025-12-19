import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [avatar, setAvatar] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://cataas.com/cat?_=${Date.now()}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        setAvatar(res.url);
      })
      .catch(() => setAvatar(null));
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-left">
          {avatar ? (
            <img
              src={avatar}
              alt="Avatar gato"
              className="avatar"
              onClick={() => setShowModal(true)}
            />
          ) : (
            <div className="avatar-fallback"></div>
          )}
          <span>react_chucknorris</span>
        </div>

        <nav>
          <Link to="/browser">Navegador</Link>
          <Link to="/chuck">Chuck Norris</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
      </header>

      {/* MODAL */}
      {showModal && avatar && (
        <div className="avatar-modal" onClick={() => setShowModal(false)}>
          <img
            src={avatar}
            alt="Gato ampliado"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
