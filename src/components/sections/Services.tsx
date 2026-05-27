'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'
import { Wrench, Brush, CircleDot, Package, Car, Droplets } from 'lucide-react'

const Section = styled.section`
  background: ${theme.colors.lightBg};
  padding: 80px 24px;
`

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
`

const SectionSub = styled.p`
  text-align: center;
  color: ${theme.colors.textMuted};
  font-size: 16px;
  margin-bottom: 52px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.radius.md};
  padding: 32px 28px;
  box-shadow: ${theme.shadow.card};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadow.cardHover};
  }
`

const IconWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${theme.radius.sm};
  background: rgba(245, 166, 35, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: ${theme.colors.accent};
`

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${theme.colors.text};
`

const CardText = styled.p`
  font-size: 14px;
  color: ${theme.colors.textMuted};
  line-height: 1.65;
`

const services = [
  {
    icon: Wrench,
    title: 'Opravy vozidel',
    text: 'Mechanické opravy osobních vozidel a dodávek do 3,5 t všech značek.',
  },
  {
    icon: Brush,
    title: 'Lakování karoserií',
    text: 'Profesionální lakování, opravy koroze a karoserní práce.',
  },
  {
    icon: CircleDot,
    title: 'Přezutí a uskladnění pneumatik',
    text: 'Výměna kol, vyvažování a sezonní uskladnění pneumatik.',
  },
  {
    icon: Package,
    title: 'Použité náhradní díly',
    text: 'Kvalitní použité díly pro různé značky a modely za dostupné ceny.',
  },
  {
    icon: Car,
    title: 'Výkup havarovaných aut',
    text: 'Kupujeme havarovaná, nepojízdná a poškozená vozidla. Rychlá domluva.',
  },
  {
    icon: Droplets,
    title: 'Výměna oleje a servis',
    text: 'Výměna motorového oleje, filtrů a pravidelná servisní prohlídka.',
  },
]

export default function Services() {
  return (
    <Section id="sluzby">
      <Inner>
        <SectionTitle>Naše služby</SectionTitle>
        <SectionSub>Vše pro vaše auto na jednom místě</SectionSub>
        <Grid>
          {services.map((s) => {
            const Icon = s.icon
            return (
              <Card key={s.title}>
                <IconWrap>
                  <Icon size={22} strokeWidth={1.75} />
                </IconWrap>
                <CardTitle>{s.title}</CardTitle>
                <CardText>{s.text}</CardText>
              </Card>
            )
          })}
        </Grid>
      </Inner>
    </Section>
  )
}
