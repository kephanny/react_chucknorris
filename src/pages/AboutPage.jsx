import React from "react";

export default function AboutPage() {
  return (
    <>
      <h1>Sobre</h1>

      <div className="card-about">
        <img
          src=".\src\assets\kephanny-medeiros.jpeg"
          alt="Foto do aluno"
          className="avatar-large"
        />

        <h2>Kephanny Medeiros França</h2>

        <a  href="https://www.linkedin.com/in/kephanny-medeiros-b34b74324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <img className="linkedin-icon" src="https://tse4.mm.bing.net/th/id/OIP.BWDVnrxuZ-oqBPomMrdVugHaB4?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </a>
      </div>
    </>
  );
}
