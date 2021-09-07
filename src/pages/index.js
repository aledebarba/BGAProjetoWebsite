import React from 'react';
import Header from '../components/header';
import Sobre from '../components/sobre';
import Servicos from '../components/servicos';
import Clientes from '../components/clientes';
import Contatos from '../components/contatos';
import Footer from '../components/footer';


const Homepage = () => {
return<>
   <Header/>
   <Sobre/>
   <Servicos/>
   <Clientes/>
   <Contatos/>
   <Footer/>
</>
};

export default Homepage;