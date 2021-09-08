import React, { useState, useEffect } from 'react';
import url from './endpoints.json'

const Clientes = () => {
    const dataUrl =  url.wordpress.clientes;
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
                content: wp_data.clientes
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
      <div className='container-xl my-5' id='clientes'>
        <h1 className="text-center">Nossos clientes</h1>
          <div className="row">
          { data.status === 'ok' && data.content.map((cliente, index) => {
              return <div className="col-sm-6 col-md-3 col-lg-4 cliente-card" key={'cliente'+index}>
                  <img src={cliente.cliente.marca.sizes.medium} alt='marca ou logo de um de nossos clientes' />
                  <h3>{cliente.cliente.nome}</h3>
              </div>
            })
          }
          </div>
        </div>
    </>
  }

  export default Clientes;