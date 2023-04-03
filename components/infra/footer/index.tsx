import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 150px;
  border-top: 1px solid #000000;

  img {
    width: auto;
    height: 50px;
    margin: 10px;
  }

  p {
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 10px;
    margin: 2 auto;
  }

  @media (min-width: 950px) {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 150px;
  border-top: 2px solid #000000;

  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: auto;
    height: 100px;
    margin: 20px;
  }

  p {
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 30px;
    margin: 4 auto;
  }
  }
`

function Footer() {
  return (
    <FooterWrapper>
      <div>
        <p>SITE DESENVOLVIDO PARA TESTE</p>
        <p>HELIO MORAES - DESENVOLVEDOR FRONT-END</p>
        <div>
          <a href="https://www.instagram.com/heliao.moraes/">
            <img src="/icon_instagram.png" alt="Icone Instagram" />
          </a>
          <a href="https://github.com/hhenriqu">
            <img src="/icon_github.png" alt="Icone Github" />
          </a>
          <a href="https://www.linkedin.com/in/hhenriqu/">
            <img src="/icon_linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
