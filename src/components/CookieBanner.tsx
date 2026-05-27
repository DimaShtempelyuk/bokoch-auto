'use client'

import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { theme } from '@/lib/theme'

const slideUp = keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`

const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: ${theme.colors.dark};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  animation: ${slideUp} 0.3s ease both;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`

const Text = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  max-width: 680px;

  a {
    color: ${theme.colors.accent};
    text-decoration: underline;
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  flex-shrink: 0;
`

const AcceptBtn = styled.button`
  background: ${theme.colors.accent};
  color: ${theme.colors.dark};
  font-weight: 700;
  font-size: 13px;
  padding: 8px 20px;
  border-radius: ${theme.radius.sm};
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.accentDark};
  }
`

const DeclineBtn = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.45);
  font-size: 13px;
  padding: 8px 14px;
  border-radius: ${theme.radius.sm};
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  font-family: inherit;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
    border-color: rgba(255, 255, 255, 0.3);
  }
`

function updateConsent(granted: boolean) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
  })
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent')
    if (stored === 'granted') {
      updateConsent(true)
    } else if (!stored) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'granted')
    updateConsent(true)
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <Bar>
      <Text>
        Tento web používá Google Analytics pro anonymní měření návštěvnosti.
        Plné sledování zapneme pouze s vaším souhlasem.
      </Text>
      <Buttons>
        <DeclineBtn onClick={decline}>Odmítnout</DeclineBtn>
        <AcceptBtn onClick={accept}>Přijmout</AcceptBtn>
      </Buttons>
    </Bar>
  )
}
