import React, { useState, useEffect } from 'react';
import Navbar from './navbar'
import url from './endpoints.json'
import { navigate } from '@reach/router';

const Header = () => {

    const [ data, setData ] = useState({
      status: 'loading',
      message: 'carregando dados',
      content: {}
    });
  
    useEffect(()=>{
      async function getData() {
        const res = await fetch(url.wordpress.header);
        if (res.ok) {
            const wp_data = await res.json();
            setData({
                status: 'ok',
                message: 'informações atualizadas',
                content: wp_data.header
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
  
    return (
      <>
        {data.status === "ok" && (
          <>
          <Navbar />
          <header id='header'>
            <div className='video-container'>
              <video autoPlay loop muted poster={'https://www.bgaprojeto.com/admin/wp-content/uploads/2021/09/video-poster.jpg'}>
                <source src={'https://www.bgaprojeto.com/admin/wp-content/uploads/2021/09/Sequence-01.mp4'} type='video/mp4' />
              </video>
            </div>
            <div className='container-xl text-content'>
              <div className="row justify-content-center">
                <div className="col-12 h-100">
                  <h1>{data.content.titulo}</h1>
                  {
                    data.content.botoes.map( (botao, i) => <button className={ botao.tipo } key={'header-buttos'+i} onClick={()=>navigate('#'+botao.link)}>{botao.rotulo}</button> )
                  }
                </div>
              </div>
            </div>
          </header>
          </>
        )}
        {data.status === 'loading' && <>
              <Navbar />
              <header id='header'>
                <div className='container-xl text-content'>
                  <div className="row justify-content-center align-content-center">
                    <div className="col-sm-11">
                        <h1>Loading...</h1>
                    </div>
                  </div>
                </div>
              </header>
        </>}
      </>
    )
  }

  export default Header;
