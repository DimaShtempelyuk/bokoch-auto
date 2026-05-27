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
  margin-bottom: 80px;

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

/* ── Bubbles ─────────────────────────────────────── */

const ValuesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const ValueItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const spinRainbow = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`

const bubblePop = keyframes`
  0%   { transform: scale(1);    opacity: 1; }
  18%  { transform: scale(1.14); opacity: 1; filter: brightness(1.3); }
  32%  { transform: scale(1.38); opacity: 0.5; }
  42%  { transform: scale(1.55); opacity: 0; }
  43%  { transform: scale(0.1);  opacity: 0; }
  68%  { transform: scale(1.06); opacity: 0.9; filter: brightness(1.1); }
  100% { transform: scale(1);    opacity: 1; filter: brightness(1); }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`

const BubbleWrap = styled.div<{ $delay: number }>`
  position: relative;
  width: 184px;
  height: 184px;
  margin-bottom: 20px;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${(p) => p.$delay}ms;
`

const RainbowRing = styled.div`
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: conic-gradient(
    rgba(255, 80,  80,  0.55),
    rgba(255, 200, 50,  0.55),
    rgba(80,  220, 130, 0.55),
    rgba(80,  160, 255, 0.55),
    rgba(200, 80,  255, 0.55),
    rgba(255, 80,  80,  0.55)
  );
  animation: ${spinRainbow} 4s linear infinite;
  z-index: 0;
`

const BubbleCircle = styled.div<{ $popped: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;

  /* Soap film fill */
  background: radial-gradient(
    circle at 34% 28%,
    rgba(255, 255, 255, 0.92) 0%,
    rgba(215, 238, 255, 0.45) 22%,
    rgba(245, 215, 255, 0.25) 48%,
    rgba(255, 228, 185, 0.28) 68%,
    rgba(200, 238, 255, 0.18) 100%
  );

  /* Bright rim + inner glow */
  box-shadow:
    inset 3px 3px 10px rgba(255, 255, 255, 0.85),
    inset -3px -3px 8px  rgba(190, 215, 255, 0.4),
    inset 0   0   28px  rgba(255, 255, 255, 0.35);

  /* Highlight spot */
  &::after {
    content: '';
    position: absolute;
    top: 16%;
    left: 20%;
    width: 30%;
    height: 16%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, transparent 100%);
    border-radius: 50%;
    transform: rotate(-35deg);
    pointer-events: none;
  }

  ${(p) =>
    p.$popped &&
    css`
      animation: ${bubblePop} 0.58s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
    `}
`

const BubbleIcon = styled.div`
  color: ${theme.colors.dark};
  opacity: 0.75;
  z-index: 1;
  pointer-events: none;
`

const BubbleTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 6px;
`

const BubbleText = styled.p`
  font-size: 13px;
  color: ${theme.colors.textMuted};
  line-height: 1.6;
  max-width: 200px;
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
  const [popped, setPopped] = useState(false)

  const handleClick = () => {
    if (popped) return
    setPopped(true)
    setTimeout(() => setPopped(false), 600)
  }

  return (
    <ValueItem>
      <BubbleWrap $delay={delay}>
        <RainbowRing />
        <BubbleCircle $popped={popped} onClick={handleClick}>
          <BubbleIcon>
            <Icon size={52} strokeWidth={1.4} />
          </BubbleIcon>
        </BubbleCircle>
      </BubbleWrap>
      <BubbleTitle>{title}</BubbleTitle>
      <BubbleText>{text}</BubbleText>
    </ValueItem>
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
              delay={i * 130}
            />
          ))}
        </ValuesRow>
      </Inner>
    </Section>
  )
}
