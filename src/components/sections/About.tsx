'use client'

import styled, { keyframes, css } from 'styled-components'
import { theme } from '@/lib/theme'
import { ShieldCheck, Tag, Zap } from 'lucide-react'
import { useState } from 'react'

const Section = styled.section`
  background: ${theme.colors.white};
  padding: 80px 24px;
`

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`

const Bio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 72px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 52px;
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

const popAnim = keyframes`
  0%   { transform: scale(1); }
  30%  { transform: scale(1.1); }
  60%  { transform: scale(0.93); }
  80%  { transform: scale(1.03); }
  100% { transform: scale(1); }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const ValuesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Bubble = styled.button<{ $popping: boolean; $delay: number }>`
  background: ${theme.colors.dark};
  border: none;
  border-radius: 24px;
  padding: 36px 28px;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: box-shadow 0.2s, transform 0.2s;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${(p) => p.$delay}ms;

  ${(p) =>
    p.$popping &&
    css`
      animation: ${popAnim} 0.4s ease forwards;
    `}

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`

const BubbleIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(245, 166, 35, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
`

const BubbleTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.white};
`

const BubbleText = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.6;
`

const values = [
  {
    icon: ShieldCheck,
    title: 'Poctivá práce',
    text: 'Každé auto opravujeme tak, jako by bylo naše vlastní.',
  },
  {
    icon: Tag,
    title: 'Férové ceny',
    text: 'Žádné skryté poplatky. Cenu víte předem, bez překvapení.',
  },
  {
    icon: Zap,
    title: 'Rychlé jednání',
    text: 'Zavolejte nebo napište. Odpovídáme rychle a bez zbytečného čekání.',
  },
]

function ValueBubble({
  icon: Icon,
  title,
  text,
  delay,
}: {
  icon: typeof ShieldCheck
  title: string
  text: string
  delay: number
}) {
  const [popping, setPopping] = useState(false)

  const handleClick = () => {
    if (popping) return
    setPopping(true)
    setTimeout(() => setPopping(false), 420)
  }

  return (
    <Bubble $popping={popping} $delay={delay} onClick={handleClick}>
      <BubbleIcon>
        <Icon size={24} strokeWidth={1.75} />
      </BubbleIcon>
      <BubbleTitle>{title}</BubbleTitle>
      <BubbleText>{text}</BubbleText>
    </Bubble>
  )
}

export default function About() {
  return (
    <Section id="o-nas">
      <Inner>
        <Bio>
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
        </Bio>

        <ValuesRow>
          {values.map((v, i) => (
            <ValueBubble
              key={v.title}
              icon={v.icon}
              title={v.title}
              text={v.text}
              delay={i * 120}
            />
          ))}
        </ValuesRow>
      </Inner>
    </Section>
  )
}
