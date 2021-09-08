import React, { useState, useEffect } from 'react';
import url from './endpoints.json'
import ContactForm from './contactform';

const Contatos = () => {
    const dataUrl =  url.wordpress.contato;
    const [ data, setData ] = useState({
      status: 'loading',
      message: 'carregando dados',
      content: {}
    });
  
    useEffect(()=>{
      async function getData() {
        const res = await fetch(dataUrl);
        if (res.ok) {
            const wp_data = await res.json();
            setData({
                status: 'ok',
                message: 'informações atualizadas',
                content: wp_data.content
            })
        } else {
            setData({
                status: 'error',
                message: 'informações atualizadas',
                content: {}
            })
        }
      }  
      getData();
    }, [dataUrl])
  
    return <>
    <div className="container-xl my-5 py-5" id='contato'>
      <h1 className='text-center'>Envie uma mensagem</h1>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <ContactForm/>
        </div>
      </div>
    </div>
    </>
  }

  export default Contatos;