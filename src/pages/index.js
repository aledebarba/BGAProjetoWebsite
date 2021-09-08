import React from 'react';
import Header from '../components/header';
import Sobre from '../components/sobre';
import Servicos from '../components/servicos';
import Clientes from '../components/clientes';
import Contatos from '../components/contatos';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet' 


const Homepage = () => {
return<>
   <Helmet>
      <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Expires" content="-1" />
      <title>BGA Projeto</title>
   </Helmet>
   <Header/>
   <Sobre/>
   <Servicos/>
   <Clientes/>
   <Contatos/>
   <Footer/>
</>
};

export default Homepage;