'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'

const Bar = styled.div`
  background: ${theme.colors.dark};
  color: rgba(255, 255, 255, 0.65);
  font-size: 13px;
  padding: 8px 0;
`

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }
`

const Left = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const Link = styled.a`
  color: rgba(255, 255, 255, 0.65);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }
`

export default function TopBar() {
  return (
    <Bar>
      <Inner>
        <Left>
          <Link href="tel:+420608259151">📞 +420 608 259 151</Link>
          <Link href="https://wa.me/420608259151" target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </Link>
        </Left>
        <span>Po–Pá: 8:00–17:00&nbsp;&nbsp;|&nbsp;&nbsp;So: podle domluvy</span>
      </Inner>
    </Bar>
  )
}
