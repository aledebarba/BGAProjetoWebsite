import React, { useState, useEffect } from 'react';
import url from './endpoints.json'

const Sobre = () => {
    const dataUrl =  url.wordpress.sobre;
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
                content: wp_data.sobre_a_empresa
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
    }, [])
  
    return <>
    <div className='container-xl my-5' id='sobre'>
    { data.status === "ok" && 
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-4">
                <img src={'https://www.bgaprojeto.com/admin/wp-content/uploads/2021/08/cropped-BGA-Projeto-Logo@2x.png'} alt='company brand' style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }} />
            </div>
            <div className="col-sm-12 col-md-4">
                <h1>{data.content.titulo}</h1>
                <p>{data.content.texto}</p>
            </div>
        </div>
    }
    </div>
    </>
  }

  export default Sobre;