'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'
import { useState } from 'react'

const Nav = styled.nav`
  background: ${theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${theme.colors.border};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
`

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const Logo = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.dark};
  letter-spacing: -0.5px;

  span {
    color: ${theme.colors.accent};
  }
`

const Links = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    display: ${(p) => (p.$open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: ${theme.colors.white};
    padding: 20px 24px 24px;
    border-bottom: 1px solid ${theme.colors.border};
    gap: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`

const NavLink = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.colors.text};
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }
`

const CTAButton = styled.a`
  background: ${theme.colors.accent};
  color: ${theme.colors.dark};
  font-weight: 700;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: ${theme.radius.sm};
  transition: background 0.2s;
  white-space: nowrap;

  &:hover {
    background: ${theme.colors.accentDark};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 12px 20px;
  }
`

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: ${theme.colors.dark};
  padding: 4px;

  @media (max-width: 768px) {
    display: block;
  }
`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <Inner>
        <Logo href="#">
          <span>Vasyl</span> Auto
        </Logo>
        <Links $open={open}>
          <NavLink href="#sluzby" onClick={() => setOpen(false)}>Služby</NavLink>
          <NavLink href="#o-nas" onClick={() => setOpen(false)}>O nás</NavLink>
          <NavLink href="#kontakt" onClick={() => setOpen(false)}>Kontakt</NavLink>
          <CTAButton
            href="https://wa.me/420000000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Napište na WhatsApp
          </CTAButton>
        </Links>
        <Hamburger onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </Hamburger>
      </Inner>
    </Nav>
  )
}
