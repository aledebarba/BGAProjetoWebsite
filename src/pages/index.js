import React, { useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "../components/image"
import Carousel from '../components/carousel'
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import ContactForm from '../components/contactform'

import {ProjectDiagram} from "@styled-icons/fa-solid/ProjectDiagram"
import {DocumentText} from "@styled-icons/heroicons-outline/DocumentText"
import {BriefcaseFill} from "@styled-icons/bootstrap/BriefcaseFill"
import {Security} from "@styled-icons/material-outlined/Security"

const Index = props => {

  useEffect(() => {
    gsap.from(".hText", { y: 50, opacity: 0, duration: 1, stagger: 0.3 })
    gsap.from("#headerImage", { x: 200, opacity: 0, duration: 1, delay: 0.5 })
  }, [])
  return (
    <WithLocalStyles>
      <Layout>
        <Navbar />
        <header>
            <div id="videoBG">
                <video autoPlay muted loop>
                    <source
                    src="https://uxdir.com/assets/movies/homepage-movie.mp4"
                    type="video/mp4"
                />
                </video>
            </div>
            <div className="container p-5 align-items-center justify-content-center">
            <div
              className="row justify-content-center align-items-center h-100"
            >
              <div className="col-sm-12 col-md-6">
                <h1 className="hText">BGA PROJETO</h1>
                <p className="hText">Nós fazemos projetos BIM com a qualidade de quem conheçe todas as fases do sistema. Nossos projetos contemplam conceito, design, engenharia, produção, mercado e ciclos de implementação de forma moderna e integrada.</p>
                <button className="btn btn-dark hText">
                  Conheça nosso trabalho
                </button>
              </div>
              <div className="col-sm-12 col-md-6">
                <div id="headerImage">
                  <Image src="header-illustration.png"></Image>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section id='About' className=''>
            <div className='container-fluid py-5'>
              <div className='container'>
                <h1>Sobre nós</h1>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                  <div className='col'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia doloribus illo rem obcaecati, dolor maiores totam hic accusantium eum ad veniam veritatis qui est vero expedita omnis minus fugit quis molestiae repudiandae? Sequi, blanditiis iusto voluptatibus maiores distinctio maxime totam eius sit porro beatae corporis quibusdam laudantium sint obcaecati, nostrum quidem rerum dolor labore accusamus adipisci molestias aliquam ipsa? Assumenda, cum excepturi? Illum magnam ducimus architecto mollitia. Expedita molestiae consequuntur, magni, neque architecto totam, quis iste illum esse consectetur possimus! Accusantium magnam porro molestiae quis incidunt earum architecto expedita, nemo eligendi. Quo error eveniet, recusandae ullam quos illo alias quaerat!</p> 
                  </div>
                  <div className='col'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempora numquam molestiae eos, fugit eveniet dicta itaque molestias modi commodi quos aliquid ab non natus aut laudantium veniam distinctio dolor incidunt optio at soluta ipsa. Laborum numquam veniam distinctio cupiditate nemo. Magnam vitae veniam culpa deleniti eius provident obcaecati pariatur!</p>
                  </div>
                  <div className='col'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero rem, fugit corrupti accusantium quisquam recusandae cupiditate, et, esse inventore dicta voluptatum. Pariatur, qui? Qui, ea suscipit aliquam saepe, animi corrupti enim odit vel quaerat aliquid itaque id iste facilis minima nobis reiciendis magnam soluta velit recusandae officiis? Ad delectus quo vero iste fuga labore velit vel minus accusamus, ex eum, obcaecati saepe aperiam quos impedit reprehenderit ipsum. Aperiam aspernatur qui consectetur amet voluptas sapiente odio.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='Services' className=''>
            <div className='container-fluid py-5'>
              <div className='container'>
                <div className="title"><span>Serviços</span></div>
                <h2 className="text-center">Projetos BIM, Avaliações, Certificados</h2>
                <div className='row justify-content-center'>
                  <div className='col-sm-12 col-md-5'>
                    <Image src="eng-ilu-1.png" />
                    <h2>Sub titulo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia est corporis voluptatibus enim aliquam asperiores quo nisi quae, aperiam ullam. Architecto, rerum? Ullam, natus.</p>
                    <ul>
                      <li>
                        <div className="icon" style={{'--icon-size': 16}}><BriefcaseFill/></div>
                        <p>O que fazemos</p>
                      </li>
                      <li>
                        <p>O que fazemos</p>
                      </li>
                      <li>
                        <p>O que fazemos</p>
                      </li>
                      <li>
                        <p>O que fazemos</p>
                      </li>
                      <li>
                        <p>O que fazemos</p>
                      </li>
                    </ul>
                  </div>
                  <div className='col-sm-12 col-md-5'>
                  <Image src="eng-ilu-2.png" />
                    <h2>Sub titulo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia est corporis voluptatibus enim aliquam asperiores quo nisi quae, aperiam ullam. Architecto, rerum? Ullam, natus.</p>
                    <ul className="checklist">
                      <li>
                        <BriefcaseFill/>
                        <p>O que fazemos</p>
                      </li>
                      <li>
                        <p>O que fazemos</p>
                      </li>
                      <li>
                        <p>O que fazemos</p>
                      </li>
                      <li>
                        <p>O que fazemos</p>
                      </li>
                      <li>
                        <p>O que fazemos</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="Parceiros">
            <div className="container-fluid">
              <div className="container">
              <h1 className="py3">Nossos Parceiros</h1>
              <div className="row logos">
                  <Image src="partners-logos/partner_logo_1.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_2.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_3.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_4.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_5.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_6.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_7.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_8.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_9.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_10.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_11.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_12.png" alt="partner symbol" />              
                  <Image src="partners-logos/partner_logo_13.png" alt="partner symbol" />   
                </div>           
              </div>
            </div>
          </section>

          <section id='Cases' className=''>
            <div className='container-fluid py-5'>
              <div className='container'>
                <h1>Cases do Portfolio</h1>
                <div className='row'>
                  <Carousel images={[
                    'slides/case-slide-1.jpg',
                    'slides/case-slide-2.jpg',
                    'slides/case-slide-3.jpg',
                    'slides/case-slide-4.jpg',
                    'slides/case-slide-5.jpg',
                    'slides/case-slide-6.jpg'
                  ]
                  }/>

                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="Footer">
          <div className="container-fluid">
            <div className="container">
              <div className="row row-cols-sm-1 row-cols-md-2">
                <div className="col">
                  <h3>Titulo</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem reprehenderit debitis quasi similique eveniet
                    omnis itaque soluta officiis, explicabo vero!
                  </p>
                </div>
                <div className="col">
                  <h3>Entre em contato!</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Layout>
    </WithLocalStyles>
  )
}
export default Index

const WithLocalStyles = styled.div`
  .icon {
      --icon-size: 48px;
      width: var(--icon-size);
      height: var(--icon-size);
  }

  header {
    height: 100vh;
    background-color: #f2f2f2;
    position: relative;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    padding-top: 80px;
    
    h1 {
      font-size: calc(var(--font-1-size)*5);
      line-height: calc(var(--font-1-lh)*4);
    }
  } 

    #videoBG {
      position: absolute;
      height: 100vh;
      max-width: 100vw;
      overflow: hidden;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
        video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 106vh;
          width: auto;
        }
    }

    #headerText {
      button {
        width: 150px;
      }
    }
    #headerBox {
      position: absolute;
      border: 15px solid lightseagreen;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 320px;
      height: 240px;
      opacity: 1;
    }
    #headerImage {
      opacity: 1;
    }
  
  #Parceiros {
    .logos {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 16px;
    }
    .logos div {
      width: 100px;
    }
  }

  #Services {

    background-color: #dadada;

    .title {
      position: relative;
      font-size: 1rem;
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: center;

      span { padding: 0 8px; }
     }

    .title:after, .title:before {
      content: '';
      position: relative;
      display: inline-block;
      width: 30px;
      height: 30px;      
      background-image: linear-gradient(45deg, black 00px, black 01px, transparent 03px, 
                            transparent 09px,  black 10px, black 11px, transparent 13px,
                            transparent 19px,  black 20px, black 21px, transparent 23px,
                            transparent 29px,  black 30px, black 31px, transparent 33px );
    }
    h2 {
      font-size: 1.5rem;
      
    }
  }

  footer {
    padding: 64px 0;
    background-color: #dfdfdf;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex; 
    flex-direction: column;

    li {
      display: flex;
      margin: 0;
      padding: 0;
      height: 2rem;
      font-size: 1rem;
    }
    li:before {
      content: '💼';
      font-size: 0.8rem;
      margin-right: 8px;      
    }
  }
  //gsap
  p.hText {
    margin-left: 8px;
    text-shadow: 1px 1px 3px white, -1px -1px 3px white;
  }

  
`
