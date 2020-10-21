import React from "react"
import {Link} from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <WithLocalStyles>
      <h1>404: Not Found</h1>
      <p>Você acessou uma página que não está diponível nesse dominio.</p>
      <Link to='/' className="btn btn-danger">Voltar para Home Page</Link>
    </WithLocalStyles>
  </Layout>
)

export default NotFoundPage

const WithLocalStyles = styled.div`
  width: 98vw;
  height: 98vh;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 { font-size: 4rem }
`