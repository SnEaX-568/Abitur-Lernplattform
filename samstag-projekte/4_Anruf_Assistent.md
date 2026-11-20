# Projekt 4: Anruf-Assistent (Mailbox → KI → Kalender + Telegram)

**Ziel:** Verpasste Anrufe landen auf deiner eigenen Mailbox. Eine KI schreibt mit, erkennt Name/Nummer/Anliegen/Termin, trägt den Termin in Google Kalender ein und schickt dir eine Telegram-Nachricht.
**Rahmen:** Privat, kein KI-Gespräch nötig, kostenlos. Für eine private Mailbox musst du nichts Besonderes ansagen.
**Handy:** Google Pixel · **Anrufbeantworter:** Fritz!Box · **Automatisierung:** Make.com · **KI:** Gemini (kostenlos)

---

## Ablauf
```
Verpasster Anruf (nach ~20 Sek.)
  → Rufumleitung auf Fritz!Box-Nummer
  → Fritz!Box-Anrufbeantworter → E-Mail mit Audio an Gmail
  → Make.com (prüft alle ~15 Min.)
  → Gemini: Mitschrift + JSON (Name, Nummer, Anliegen, Datum, Uhrzeit, Ort)
  → Datum vorhanden?  JA → Google Kalender   |   NEIN → Google Tasks „Rückruf“
  → Telegram-Nachricht + Sprachnachricht
```
**Kein Datum genannt?** 1) Ansage fragt danach, 2) KI rechnet „nächsten Samstag“ um, 3) sonst Rückruf-Aufgabe.

---

## Was Claude allein machen kann ✅
- Mailbox-Ansage-Text schreiben
- Gemini-Prompt fertig formulieren (unten)
- Make-Szenario als **Bauplan** (bzw. als importierbare Blueprint-Datei) vorbereiten
- Telegram-Nachrichtenvorlage
- Dir bei jedem Schritt helfen, wenn du Screenshots schickst

## Was nur du machen kannst 🔑 (Checkliste, ca. 2 Std.)

### Vorab klären (10 Min.)
- [ ] **Hat die Fritz!Box eine freie Rufnummer, die sonst niemand nutzt?** (fritz.box → Telefonie → Eigene Rufnummern). Wenn nur die Familiennummer: lieber virtuelle Nummer (z. B. sipgate/easybell, aktuelle Tarife prüfen), sonst nimmt der AB auch Familienanrufe an.
- [ ] Ist die **Rufumleitung ins Festnetz** in deinem Handytarif kostenlos?
- [ ] Pixel-Anruf-Filter: aus oder nur für Spam (sonst fängt er Anrufe vor der Mailbox ab)

### 1. Fritz!Box (20 Min.)
- [ ] fritz.box → **System → Push Service → Absender**: Gmail-Adresse mit **App-Passwort** eintragen
- [ ] **Telefonie → Telefoniegeräte → Neues Gerät → Anrufbeantworter**
  - Rufnummer: die freie Zweitnummer
  - Annahme nach **0 Sekunden**
  - **„Nachricht per E-Mail versenden“** an dein Gmail
  - Ansage aufsprechen (Text unten)
- [ ] Testanruf → kommt die Mail?

### 2. Rufumleitung am Pixel (5 Min.)
In die Telefon-App tippen und anrufen (`+49XXXXXXXX` = Fritz!Box-Nummer ohne erste 0):
- [ ] `**61*+49XXXXXXXX**20#` – nicht angenommen nach 20 Sek.
- [ ] `**62*+49XXXXXXXX#` – Handy aus / kein Netz
- [ ] `**67*+49XXXXXXXX#` – besetzt
- Alles wieder aus: `##002#`

### 3. Telegram-Bot (10 Min.)
- [ ] In Telegram **@BotFather** → `/newbot` → Token notieren
- [ ] Dem Bot einmal „Hallo“ schreiben
- [ ] Chat-ID bei **@userinfobot** holen

### 4. Gemini-Schlüssel (5 Min.)
- [ ] aistudio.google.com → „Get API key“ (Hinweis: im Gratis-Tarif darf Google die Daten zur Verbesserung nutzen; Alternative OpenAI ca. 1–2 €/Monat)

### 5. Make.com (60 Min.)
- [ ] Konto anlegen (Gratis-Tarif reicht für < 100 Anrufe/Monat – Grenzen aktuell prüfen)
- [ ] Szenario bauen:

| # | Modul | Einstellung |
|---|---|---|
| 1 | Gmail – Watch Emails | Absender = Fritz!Box, mit Anhang |
| 2 | Gmail – Iterate Attachments | Audiodatei |
| 3 | Google Gemini AI – Generate Content | Audio + Prompt (unten) |
| 4 | JSON – Parse JSON | Felder trennen |
| 5 | Router | A: `datum` nicht leer · B: `datum` leer |
| 5A | Google Calendar – Create Event | Titel `{{name}} – {{anliegen}}`, ohne Uhrzeit ganztägig, Beschreibung: Nummer + Mitschrift |
| 5B | Google Tasks – Create Task | „Rückruf: {{name}} ({{telefon}}) – {{anliegen}}“, fällig morgen |
| 6 | Telegram Bot – Send Message (+ Send Audio) | an deine Chat-ID |

### 6. Testen (15 Min.)
- [ ] Anruf mit genauem Datum („Samstag um 10“)
- [ ] Anruf nur mit Tag
- [ ] Anruf ohne Datum

---

## Fertige Texte

**Mailbox-Ansage**
> „Hi, hier ist die Mailbox von [Dein Name]. Sag mir bitte kurz deinen Namen, worum es geht und wann es dir passt – ich melde mich so schnell wie möglich!“

**Gemini-Prompt (Modul 3)**
```
Heute ist {{formatDate(now; "dddd, DD.MM.YYYY HH:mm"; "Europe/Berlin")}}.
Die Anrufernummer laut System ist: {{Betreff/Text der Fritz!Box-Mail}}.

Das Audio ist eine Nachricht auf meiner privaten Mailbox.
Antworte NUR mit diesem JSON, ohne weiteren Text:
{
  "name": "Name des Anrufers oder null",
  "telefon": "genannte Nummer, sonst die Systemnummer",
  "anliegen": "kurz, max. 8 Wörter",
  "datum": "YYYY-MM-DD oder null",
  "uhrzeit": "HH:MM oder null",
  "ort": "Adresse/Ort oder null",
  "dringend": true oder false,
  "transkript": "wörtliche Mitschrift"
}
Rechne relative Angaben ("morgen", "nächsten Samstag") in ein echtes Datum um.
Erfinde nichts – was nicht gesagt wurde, ist null.
```

**Telegram-Nachricht**
```
📞 {{name}} ({{telefon}})
📝 {{anliegen}}
📅 {{datum}} {{uhrzeit}} → im Kalender ✅   (bzw. 📌 Rückruf nötig)

„{{transkript}}“
```

## Später (Ausbau)
- Im Telegram antworten („Termin Fr 15 Uhr“) → Make trägt nach
- Bekannte Nummern mit Google-Kontakten abgleichen

## 🚀 Start-Prompt
```
Lies 4_Anruf_Assistent.md. Ich bin jetzt an der Fritz!Box. Führ mich Schritt
für Schritt durch die Checkliste – immer nur einen Schritt, warte auf mein
"ok" oder einen Screenshot. Wenn ein Menü anders heißt, finde die richtige
Stelle. Erstelle mir am Ende eine Make-Blueprint-Datei, die ich importieren kann.
```

## Offene Fragen
- Freie Zweitnummer an der Fritz!Box vorhanden?
- Welcher Handytarif/Netz (Rufumleitung kostenlos)?
