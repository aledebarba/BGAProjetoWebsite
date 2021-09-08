import React, { useState, useEffect } from 'react';
import url from './endpoints.json'

const Servicos = () => {
    const dataUrl =  url.wordpress.servicos;
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
                content: wp_data.servicos
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
    { data.status === 'ok' &&
    <div className="container-xl" id='servicos'>
      <h1 className='text-center'>Nossos serviços</h1>
      <div className="accordion" id="accordion-services">
        {data.content.map( (servico, index) => { 
            if (servico.titulo) {
              return (          
              <div className="accordion-item" key={'servico-accordion-item'+index}>
                  <h2 className="accordion-header" id={"heading"+index}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse"+index}
                    aria-expanded="true"
                    aria-controls={"collapse"+index} >
                      {!!servico.media.icon && 
                        <img src={servico.media.icon} alt='icone' style={{ width: 32, height: 'auto', marginRight: 8}}/>} 
                      {servico.titulo}
                  </button>
                </h2>
                  <div id={"collapse"+index} 
                    className={"accordion-collapse collapse"+(index===0 ? " show" : "") }
                    aria-labelledby={"heading"+index} >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-sm-12 col-md-8">
                          <div dangerouslySetInnerHTML={{__html: servico.descricao }} key={'accodion-servicos'+index} />
                        </div>
                        <div className="col-sm-12 col-md-4">
                          { !!servico.media.image && <img src={servico.media.image} alt={servico.titulo} style={{width: '100%'}}/> }
                        </div>
                      </div>
                  </div>
                </div>
              </div>)} else {
                return <></>
              }} 
            )
          }        
      </div>
      </div>
    }
    </>
  }

  export default Servicos;