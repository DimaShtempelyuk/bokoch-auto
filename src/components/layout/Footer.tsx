'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'

const Foot = styled.footer`
  background: ${theme.colors.dark};
  color: rgba(255, 255, 255, 0.5);
  padding: 32px 24px;
  font-size: 14px;
`

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${theme.colors.white};

  span {
    color: ${theme.colors.accent};
  }
`

const PhoneLink = styled.a`
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }
`

export default function Footer() {
  return (
    <Foot>
      <Inner>
        <Logo>
          <span>Vasyl</span> Auto
        </Logo>
        <span>© {new Date().getFullYear()} Autoservis Bokoch — Brandýs nad Labem</span>
        <PhoneLink href="tel:+420000000000">+420 000 000 000</PhoneLink>
      </Inner>
    </Foot>
  )
}
