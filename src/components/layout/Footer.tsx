'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'
import { Phone, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const Foot = styled.footer`
  background: ${theme.colors.dark};
  color: rgba(255, 255, 255, 0.5);
  padding: 52px 24px 28px;
  font-size: 14px;
`

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const Col = styled.div``

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 10px;

  span {
    color: ${theme.colors.accent};
  }
`

const Tagline = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.45);
  max-width: 240px;
`

const ColTitle = styled.p`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.35);
  margin-bottom: 14px;
`

const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }
`

const WALink = styled.a`
  color: ${theme.colors.whatsapp};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`

const AddressText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.5;
`

const HoursTable = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 14px;
`

const Day = styled.span`
  color: rgba(255, 255, 255, 0.4);
`

const HoursVal = styled.span<{ $closed?: boolean }>`
  color: ${(p) => (p.$closed ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.65)')};
  font-style: ${(p) => (p.$closed ? 'italic' : 'normal')};
`

const Divider = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 20px;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
`

const hours = [
  { day: 'Po', val: '8:00–17:00' },
  { day: 'Út', val: '8:00–17:00' },
  { day: 'St', val: '8:00–17:00' },
  { day: 'Čt', val: '8:00–17:00' },
  { day: 'Pá', val: '8:00–17:00' },
  { day: 'So', val: 'dle domluvy' },
  { day: 'Ne', val: 'zavřeno', closed: true },
]

export default function Footer() {
  return (
    <Foot>
      <Inner>
        <Columns>
          <Col>
            <Logo><span>Autoservis</span> Bokoch</Logo>
            <Tagline>
              Opravy, lakování a náhradní díly pro všechny značky v Brandýse nad Labem.
            </Tagline>
          </Col>

          <Col>
            <ColTitle>Kontakt</ColTitle>
            <ContactLink href="tel:+420608259151">
              <Phone size={13} /> +420 608 259 151
            </ContactLink>
            <WALink href="https://wa.me/420608259151" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={14} /> WhatsApp
            </WALink>
            <AddressText>
              <MapPin size={13} style={{ flexShrink: 0, marginTop: 2 }} />
              Mariánské nám. 4/3<br />250 01 Brandýs nad Labem
            </AddressText>
          </Col>

          <Col>
            <ColTitle>Provozní doba</ColTitle>
            <HoursTable>
              {hours.map((h) => (
                <>
                  <Day key={`d-${h.day}`}>{h.day}</Day>
                  <HoursVal key={`v-${h.day}`} $closed={h.closed}>{h.val}</HoursVal>
                </>
              ))}
            </HoursTable>
          </Col>
        </Columns>

        <Divider>
          © {new Date().getFullYear()} Autoservis Bokoch — Brandýs nad Labem-Stará Boleslav
        </Divider>
      </Inner>
    </Foot>
  )
}
