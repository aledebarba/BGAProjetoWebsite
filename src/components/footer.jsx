import React, { useState, useEffect } from 'react';
import url from './endpoints.json'

const Footer = () => {
    const dataUrl =  url.wordpress.footer;
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
                content: wp_data.footer
            })
            console.log(data.content)
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
    <div className="container-fluid" id='footer'>
    <div className="containter-xl my-5">
      <div className="row justify-content-center">
      {
        data.status === "ok"  && data.content.map( (coluna, index) => {
          return <div className="col-sm-6 col-md-2" key={'footer-column'+index}>
              <div dangerouslySetInnerHTML={{ __html:coluna.texto }}/>
          </div> })
      }
      </div>
    </div>
    </div>
    </>
  }

  export default Footer;