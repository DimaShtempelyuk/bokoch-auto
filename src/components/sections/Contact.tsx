'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'
import { useForm, ValidationError } from '@formspree/react'
import { Phone, MapPin, Clock } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

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
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.radius.md};
  padding: 40px;
  box-shadow: ${theme.shadow.card};
`

const FormTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`

const Field = styled.div`
  margin-bottom: 16px;
`

const Label = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${theme.colors.text};
`

const Input = styled.input`
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  font-size: 15px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${theme.colors.accent};
  }

  &:invalid:not(:placeholder-shown) {
    border-color: #e53935;
  }
`

const FieldError = styled.span`
  display: block;
  font-size: 12px;
  color: #e53935;
  margin-top: 4px;
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm};
  font-size: 15px;
  font-family: inherit;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${theme.colors.accent};
  }
`

const SubmitBtn = styled.button`
  width: 100%;
  background: ${theme.colors.accent};
  color: ${theme.colors.dark};
  font-weight: 700;
  font-size: 15px;
  padding: 13px 24px;
  border-radius: ${theme.radius.sm};
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${theme.colors.accentDark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const SuccessMsg = styled.p`
  color: #2e7d32;
  font-weight: 600;
  font-size: 15px;
`

const InfoCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.radius.md};
  padding: 28px;
  box-shadow: ${theme.shadow.card};
  height: 100%;
`

const InfoGroup = styled.div`
  & + & {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid ${theme.colors.border};
  }
`

const InfoLabel = styled.p`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${theme.colors.textMuted};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`

const InfoLink = styled.a`
  font-size: 15px;
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s;
  font-weight: 500;

  &:hover {
    color: ${theme.colors.accent};
  }
`

const WAInfoLink = styled.a`
  font-size: 15px;
  color: ${theme.colors.whatsapp};
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`

const InfoText = styled.p`
  font-size: 14px;
  color: ${theme.colors.text};
  line-height: 1.6;
`

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2px 16px;
  font-size: 14px;
`

const Day = styled.span`
  color: ${theme.colors.textMuted};
  white-space: nowrap;
`

const Hours = styled.span<{ $closed?: boolean }>`
  color: ${(p) => (p.$closed ? theme.colors.textMuted : theme.colors.text)};
  font-style: ${(p) => (p.$closed ? 'italic' : 'normal')};
`

const MapWrapper = styled.div`
  border-radius: ${theme.radius.md};
  overflow: hidden;
  box-shadow: ${theme.shadow.card};
  height: 300px;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`

const hours = [
  { day: 'Pondělí', hours: '8:00–17:00' },
  { day: 'Úterý', hours: '8:00–17:00' },
  { day: 'Středa', hours: '8:00–17:00' },
  { day: 'Čtvrtek', hours: '8:00–17:00' },
  { day: 'Pátek', hours: '8:00–17:00' },
  { day: 'Sobota', hours: 'podle domluvy' },
  { day: 'Neděle', hours: 'zavřeno', closed: true },
]

const PHONE_REGEX = '^[+]?[\\d\\s\\-\\(\\)]{7,20}$'

export default function Contact() {
  const [state, handleSubmit] = useForm('xpqnkdvk')

  return (
    <Section id="kontakt">
      <Inner>
        <SectionTitle>Kontaktujte nás</SectionTitle>
        <SectionSub>Zavolejte, napište nebo vyplňte formulář</SectionSub>

        <Grid>
          <FormCard>
            <FormTitle>Napište nám</FormTitle>
            {state.succeeded ? (
              <SuccessMsg>✓ Zpráva odeslána! Ozveme se co nejdříve.</SuccessMsg>
            ) : (
              <form onSubmit={handleSubmit}>
                <Field>
                  <Label htmlFor="name">Jméno</Label>
                  <Input id="name" name="name" type="text" placeholder="Jan Novák" required />
                  <ValidationError field="name" errors={state.errors} />
                </Field>
                <Field>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+420 608 259 151"
                    pattern={PHONE_REGEX}
                    title="Zadejte platné telefonní číslo"
                    required
                  />
                  <FieldError id="phone-error" />
                  <ValidationError field="phone" errors={state.errors} />
                </Field>
                <Field>
                  <Label htmlFor="message">Zpráva</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Popište váš požadavek..."
                    required
                  />
                </Field>
                <SubmitBtn type="submit" disabled={state.submitting}>
                  {state.submitting ? 'Odesílám...' : 'Odeslat zprávu'}
                </SubmitBtn>
              </form>
            )}
          </FormCard>

          <InfoCard>
            <InfoGroup>
              <InfoLabel><Phone size={12} /> Telefon</InfoLabel>
              <InfoLink href="tel:+420608259151">+420 608 259 151</InfoLink>
            </InfoGroup>
            <InfoGroup>
              <InfoLabel><FaWhatsapp size={12} /> WhatsApp</InfoLabel>
              <WAInfoLink href="https://wa.me/420608259151" target="_blank" rel="noopener noreferrer">
                +420 608 259 151
              </WAInfoLink>
            </InfoGroup>
            <InfoGroup>
              <InfoLabel><MapPin size={12} /> Adresa</InfoLabel>
              <InfoText>Mariánské nám. 4/3<br />250 01 Brandýs nad Labem-Stará Boleslav</InfoText>
            </InfoGroup>
            <InfoGroup>
              <InfoLabel><Clock size={12} /> Provozní doba</InfoLabel>
              <HoursGrid>
                {hours.map((h) => (
                  <>
                    <Day key={`d-${h.day}`}>{h.day}</Day>
                    <Hours key={`h-${h.day}`} $closed={h.closed}>{h.hours}</Hours>
                  </>
                ))}
              </HoursGrid>
            </InfoGroup>
          </InfoCard>
        </Grid>

        <MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.158334415262!2d14.671716813110528!3d50.19557127142594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bf18864ffc649%3A0xc5b43889dc6b583b!2sAutoservis%20Bokoch!5e0!3m2!1sen!2scz!4v1779906161867!5m2!1sen!2scz"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </MapWrapper>
      </Inner>
    </Section>
  )
}
