'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'

const Section = styled.section`
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
  padding: 100px 24px 110px;
  text-align: center;
`

const Inner = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

const Eyebrow = styled.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 20px;
  letter-spacing: -1px;
`

const Subtitle = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.65;
  margin-bottom: 40px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
`

const Buttons = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
`

const PrimaryBtn = styled.a`
  background: ${theme.colors.accent};
  color: ${theme.colors.dark};
  font-weight: 700;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: ${theme.radius.sm};
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: ${theme.colors.accentDark};
    transform: translateY(-1px);
  }
`

const SecondaryBtn = styled.a`
  background: transparent;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: ${theme.radius.sm};
  border: 2px solid rgba(255, 255, 255, 0.25);
  transition: border-color 0.2s, transform 0.15s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-1px);
  }
`

export default function Hero() {
  return (
    <Section>
      <Inner>
        <Eyebrow>Brandýs nad Labem</Eyebrow>
        <Title>Autoservis a náhradní díly pro vaše auto</Title>
        <Subtitle>
          Opravy a lakování osobních vozidel a dodávek do 3,5&nbsp;t, všechny
          značky. Použité díly za rozumné ceny.
        </Subtitle>
        <Buttons>
          <PrimaryBtn href="tel:+420000000000">📞 Zavolat</PrimaryBtn>
          <SecondaryBtn
            href="https://wa.me/420000000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp
          </SecondaryBtn>
        </Buttons>
      </Inner>
    </Section>
  )
}
