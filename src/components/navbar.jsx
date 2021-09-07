import React from "react";
import { navigate } from '@reach/router';
import { Helmet } from "react-helmet";

const Navbar = () => {
    return <>
    <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </Helmet>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-xl">
      <a className="navbar-brand" href="#"><img src={'https://www.bgaprojeto.com/admin/wp-content/uploads/2021/08/Logo-Mini-Branco.png'} alt='brand icon' style={{ height: 24, margin: "-4px 8px 0 0" }}/>BGA Projeto</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          <a className="nav-link" href="#sobre" onClick={()=>navigate('#sobre')}>Sobre</a>
          <a className="nav-link" href="#servicos" onClick={()=>navigate('#servicos')}>Serviços</a>
          <a className="nav-link" href="#clientes" onClick={()=>navigate('#clientes')}>Clientes</a>
          <a className="nav-link" href="#contato" onClick={()=>navigate('#contato')}>Contato</a>
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default Navbar;