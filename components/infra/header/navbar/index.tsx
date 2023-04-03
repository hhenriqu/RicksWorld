import router from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  cursor: pointer;

  @media (min-width: 950px) {
    background-color: #1f1f43;
    position: fixed;
    height: 100px;
    z-index: 0;

    div {
      display: flex;
      color: #FFF;

      p {
        margin: auto 5px;
        font-weight: 700;
        font-size: 24px;
      }
    }
  }
`

const Logo = styled.img`
  width: 100px;

  @media (min-width: 950px) {
    width: 300px;
  }
`

const ToggleButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const ToggleIcon = styled.span`
  display: block;
  width: 30px;
  height: 4px;
  background-color: #055354;
  margin-bottom: 6px;
`

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: #1f1f43;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  p {
    padding: 10px;
  }

  p {
    color: #02b1c6;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    transition: color 0.3s ease;
  }
`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950)
    }

    handleResize() // to set the initial state

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {isMobile ? (
        <NavbarWrapper>
          <div>
            <Logo src="logo_ricks_world.png" alt="Logo" />
          </div>
          <ToggleButton onClick={toggleMenu}>
            <ToggleIcon />
            <ToggleIcon />
            <ToggleIcon />
          </ToggleButton>
          {isOpen && (
            <Menu className={isOpen ? 'open' : ''}>
              <p onClick={() => router.push('/')}>PÁGINA INICIAL</p>
              <p onClick={() => router.push('/personagens')}>PERSONAGENS</p>
              <p>
                <a href="#">PESQUISAR</a>
              </p>
            </Menu>
          )}
        </NavbarWrapper>
      ) : (
        <NavbarWrapper>
          <Logo src="logo_ricks_world.png" alt="Logo" />
          <div>
            <p onClick={() => router.push('/')}>PÁGINA INICIAL</p>
            <p onClick={() => router.push('/personagens')}>PERSONAGENS</p>
            <p>
              <a href="#">LOCAIS</a>
            </p>
          </div>
        </NavbarWrapper>
      )}
    </>
  )
}

export default Navbar
