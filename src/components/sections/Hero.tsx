'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

const Section = styled.section`
  position: relative;
  color: ${theme.colors.white};
  padding: 100px 24px 110px;
  text-align: center;
  overflow: hidden;
`

const BgImage = styled(Image)`
  object-fit: cover;
  object-position: center 60%;
  z-index: 0;
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.62);
  z-index: 1;
`

const Inner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
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

const PhoneBtn = styled.a`
  background: ${theme.colors.accent};
  color: ${theme.colors.dark};
  font-weight: 700;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: ${theme.radius.sm};
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: ${theme.colors.accentDark};
    transform: translateY(-1px);
  }
`

const WABtn = styled.a`
  background: ${theme.colors.whatsapp};
  color: ${theme.colors.white};
  font-weight: 700;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: ${theme.radius.sm};
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: ${theme.colors.whatsappDark};
    transform: translateY(-1px);
  }
`

export default function Hero() {
  return (
    <Section>
      <BgImage
        src="/hero-exterior.jpg"
        alt="Autoservis Bokoch — dílna v Brandýse nad Labem"
        fill
        priority
        sizes="100vw"
      />
      <Overlay />
      <Inner>
        <Eyebrow>Brandýs nad Labem</Eyebrow>
        <Title>Autoservis a náhradní díly pro vaše auto</Title>
        <Subtitle>
          Opravy a lakování osobních vozidel a dodávek do 3,5&nbsp;t, všechny
          značky. Použité díly za rozumné ceny.
        </Subtitle>
        <Buttons>
          <PhoneBtn href="tel:+420608259151">
            <Phone size={18} strokeWidth={2} /> Zavolat
          </PhoneBtn>
          <WABtn href="https://wa.me/420608259151" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} /> WhatsApp
          </WABtn>
        </Buttons>
      </Inner>
    </Section>
  )
}
