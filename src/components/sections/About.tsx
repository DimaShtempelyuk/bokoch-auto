'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'

const Section = styled.section`
  background: ${theme.colors.white};
  padding: 80px 24px;
`

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const PhotoPlaceholder = styled.div`
  background: ${theme.colors.lightBg};
  border-radius: ${theme.radius.md};
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.textMuted};
  font-size: 14px;
  border: 2px dashed ${theme.colors.border};
  text-align: center;
  padding: 20px;
`

const Eyebrow = styled.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 14px;
`

const Title = styled.h2`
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
`

const Text = styled.p`
  font-size: 16px;
  color: ${theme.colors.textMuted};
  line-height: 1.75;
  margin-bottom: 14px;
`

const Accent = styled.span`
  color: ${theme.colors.text};
  font-weight: 600;
`

export default function About() {
  return (
    <Section id="o-nas">
      <Inner>
        <PhotoPlaceholder>📷 Foto dílny / Vasyla</PhotoPlaceholder>
        <div>
          <Eyebrow>O nás</Eyebrow>
          <Title>Mechanikem z vášně, profesionálem z praxe</Title>
          <Text>
            Jmenuji se <Accent>Vasyl Bokoch</Accent> a provozuji autoservis
            v Brandýse nad Labem. Auta opravuji přes{' '}
            <Accent>15 let</Accent>, pracoval jsem na všech značkách — od Škody
            po BMW.
          </Text>
          <Text>
            Zaměřuji se na kvalitní práci za férovou cenu. Každé auto,
            které ke mně přijede, dostane péči, jako by bylo moje vlastní.
          </Text>
          <Text>
            Kromě oprav mám skladem použité díly za dostupné ceny a vykupuji
            havarovaná vozidla.
          </Text>
        </div>
      </Inner>
    </Section>
  )
}
