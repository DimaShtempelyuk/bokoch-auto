'use client'

import styled from 'styled-components'
import { theme } from '@/lib/theme'
import { useState, FormEvent } from 'react'

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

  &:hover {
    background: ${theme.colors.accentDark};
  }
`

const SuccessMsg = styled.p`
  color: #2e7d32;
  font-weight: 600;
  font-size: 15px;
`

const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const InfoCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.radius.md};
  padding: 28px;
  box-shadow: ${theme.shadow.card};
`

const InfoGroup = styled.div`
  & + & {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid ${theme.colors.border};
  }
`

const InfoLabel = styled.p`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${theme.colors.textMuted};
  margin-bottom: 4px;
`

const InfoLink = styled.a`
  font-size: 15px;
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }
`

const InfoText = styled.p`
  font-size: 15px;
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  gap: 8px;
`

const MapPlaceholder = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.radius.md};
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.textMuted};
  font-size: 14px;
  border: 2px dashed ${theme.colors.border};
  text-align: center;
  padding: 20px;
  line-height: 1.5;
`

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // TODO: replace REPLACE_ME with your Formspree form ID from formspree.io
    const res = await fetch('https://formspree.io/f/REPLACE_ME', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setSent(true)
      form.reset()
    }
  }

  return (
    <Section id="kontakt">
      <Inner>
        <SectionTitle>Kontaktujte nás</SectionTitle>
        <SectionSub>Zavolejte, napište nebo vyplňte formulář</SectionSub>
        <Grid>
          <FormCard>
            <FormTitle>Napište nám</FormTitle>
            {sent ? (
              <SuccessMsg>✓ Zpráva odeslána! Ozveme se co nejdříve.</SuccessMsg>
            ) : (
              <form onSubmit={handleSubmit}>
                <Field>
                  <Label htmlFor="name">Jméno</Label>
                  <Input id="name" name="name" type="text" placeholder="Jan Novák" required />
                </Field>
                <Field>
                  <Label htmlFor="contact">Telefon nebo e-mail</Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="text"
                    placeholder="+420 600 000 000"
                    required
                  />
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
                <SubmitBtn type="submit">Odeslat zprávu</SubmitBtn>
              </form>
            )}
          </FormCard>

          <InfoCol>
            <InfoCard>
              <InfoGroup>
                <InfoLabel>Telefon</InfoLabel>
                <InfoLink href="tel:+420608259151">📞 +420 608 259 151</InfoLink>
              </InfoGroup>
              <InfoGroup>
                <InfoLabel>WhatsApp</InfoLabel>
                <InfoLink
                  href="https://wa.me/420608259151"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 +420 608 259 151
                </InfoLink>
              </InfoGroup>
              <InfoGroup>
                <InfoLabel>Adresa</InfoLabel>
                <InfoText>📍 Mariánské nám. 4/3, 250 01 Brandýs nad Labem-Stará Boleslav</InfoText>
              </InfoGroup>
              <InfoGroup>
                <InfoLabel>Provozní doba</InfoLabel>
                <InfoText>🕐 Po–Pá: 8:00–18:00</InfoText>
                <InfoText style={{ marginTop: 4 }}>🕐 So: 9:00–13:00</InfoText>
              </InfoGroup>
            </InfoCard>

            <MapPlaceholder>
              🗺️ Mapa bude přidána po nastavení<br />Google Business Profile
            </MapPlaceholder>
          </InfoCol>
        </Grid>
      </Inner>
    </Section>
  )
}
