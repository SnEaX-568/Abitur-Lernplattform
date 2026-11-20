# Projekt 3: Shorts für TikTok, Instagram & YouTube

**Ziel:** Regelmäßig kurze Videos hochladen → Reichweite → später Einnahmen.
**Strategie-Idee:** Starte mit **Orbit-Rush-Content**. Das ist echter, eigener Inhalt, bringt Tester & Downloads und erzählt eine Geschichte („Ich bin Schüler und bringe mein erstes Spiel raus“). Später kannst du weitere Themen dazunehmen.

---

## Ehrlicher Realitätscheck: „Passives Einkommen“
- **YouTube Shorts (Werbeeinnahmen):** 1.000 Abonnenten + 10 Mio. Shorts-Aufrufe in 90 Tagen. **Ab 1. Feb. 2027 werden die Regeln strenger** (es zählen nur noch „qualifizierte“ Aufrufe bzw. doppelte Wiedergabezeit). Wer vorher drin ist, bleibt drin. Fan-Funktionen gibt's teils schon ab 500 Abos.
- **TikTok Creator Rewards:** Nach meinem Wissensstand ab 18 Jahren, 10.000 Follower, 100.000 Aufrufe in 30 Tagen und Videos über 1 Minute – bitte in der TikTok-App unter „Creator Tools“ prüfen.
- **Instagram:** Kaum direkte Bezahlung in Deutschland, eher Kooperationen.
- **Realistisch:** Die ersten Monate geht's um Reichweite, nicht um Geld. Der schnellste Weg zu Geld ist eher **indirekt** (eigenes Spiel bewerben, später Kooperationen).
- **Unter 18?** Dann brauchst du für Auszahlungen (AdSense etc.) Eltern bzw. sie müssen das Konto führen.

---

## Was Claude allein machen kann ✅
1. **Content-Plan für 4 Wochen** (z. B. 3 Videos/Woche), mit Themen, Haken (erste 2 Sekunden), Ablauf
2. **Fertige Skripte** pro Video: Sprechtext (15–45 Sek.), Bildschirmtext, Schnitt-Anweisungen
3. **Captions + Hashtags** je Plattform (TikTok/Insta/YouTube unterscheiden sich)
4. **Videos per Code bauen:**
   - Text-/Info-Videos (animierte Texte, 1080×1920) mit Python/ffmpeg oder Remotion
   - Gameplay-Clips von Orbit Rush schneiden, Untertitel einbrennen, Zoom-Effekte
   - Automatisch Untertitel aus deiner Sprachaufnahme (Whisper)
5. **Vorlagen** für Thumbnails/Titelbilder
6. Ordnerstruktur: `shorts/woche-01/video-01/` mit `skript.md`, `caption.txt`, `video.mp4`

## Was nur du machen kannst 🔑
- Konten anlegen (TikTok, Instagram als Creator/Business-Konto, YouTube-Kanal)
- **Sprache einsprechen** (Handy reicht, ruhiger Raum)
- Gameplay aufnehmen (Bildschirmaufnahme am Handy) – oder Claude nimmt es am PC auf, falls das Spiel dort läuft
- **Hochladen** – kann ich nicht für dich (keine Logins). Tipp: Mit den Planungs-Funktionen von TikTok/Meta Business Suite/YouTube Studio einmal pro Woche alles auf einmal einplanen.
- Auf Kommentare antworten (wichtig für den Algorithmus)

## Wochen-Ablauf (Ziel: 1 Std. pro Woche für dich)
```
Claude (während du arbeitest):  Skripte + Captions + Text-Videos + Clip-Schnitte
Du (Samstagabend, 30 Min.):     5 Sprachaufnahmen einsprechen
Claude (5 Min.):                Ton + Untertitel einbauen → fertige MP4s
Du (20 Min.):                   Alle Videos auf 3 Plattformen einplanen
```

## Ideen für die ersten Videos
1. „Ich bin Schüler und habe ein Handyspiel programmiert“ (Gameplay + Story)
2. „Ich suche 12 Tester für mein Spiel“ (Aufruf, Link in Bio)
3. „Vorher/Nachher: Ich habe mein Spiel barrierefreier gemacht“ (Sanfte Effekte)
4. „Ich lasse KI meine Anrufe beantworten“ (Anruf-Assistent-Projekt!)
5. „Schafft ihr Level X?“ (Challenge-Clip)
6. „Wie ich mit KI mein Abi lerne“ (Abitur-Lernplattform)

→ Deine eigenen Projekte sind dein Content. Das spart Ideensuche.

## Was hier sofort startet, während du arbeitest
Starte morgens vom Handy aus eine Sitzung in **Claude Code im Web/App** (läuft in der Cloud, PC muss nicht an sein) mit Prompt A. Ergebnis landet auf GitHub, abends holst du es dir.

## 🚀 Start-Prompts

**Prompt A – Content-Plan + Skripte (geht auch in der Cloud ohne PC)**
```
Lies 3_Shorts_TikTok_Instagram_YouTube.md. Erstelle einen Content-Plan für
4 Wochen (3 Videos pro Woche) mit den Ideen aus der Datei. Schreib für die
ersten 6 Videos fertige Skripte: Haken in den ersten 2 Sekunden, Sprechtext
(max. 40 Sek.), Bildschirmtexte, Schnitt-Anweisungen, Caption + Hashtags
für TikTok, Instagram und YouTube. Lege alles unter shorts/woche-01/ und
shorts/woche-02/ ab und pushe es auf GitHub.
```

**Prompt B – Videos bauen (am PC, mit Gameplay-Aufnahmen)**
```
In shorts/rohmaterial/ liegen meine Gameplay-Aufnahmen und Sprachaufnahmen.
Baue daraus nach den Skripten fertige Hochformat-Videos (1080x1920, max. 45
Sek.) mit eingebrannten Untertiteln, Zooms auf wichtige Stellen und leiser
Hintergrundmusik (nur lizenzfreie). Speichere sie als video.mp4 in den
jeweiligen Ordnern.
```

**Prompt C – Text-Videos ohne Aufnahmen**
```
Erstelle aus den Skripten, die keinen Gameplay-Clip brauchen, reine
Text-Animations-Videos (1080x1920) per Code, damit ich sie sofort hochladen
kann. Zeig mir eins zur Kontrolle, bevor du alle baust.
```

## Offene Fragen
- Hast du die Konten schon (TikTok, Insta, YouTube)? Wie heißen sie?
- Willst du mit Gesicht oder nur Stimme/Bildschirm?
- Bist du über 18?
- Andere Themen außer deinen Projekten, die dich interessieren?

## Quellen
- [YouTube Blog: Änderungen am Partnerprogramm](https://blog.youtube/news-and-events/new-opportunities-to-earn-and-changes-to-the-youtube-partner-program/)
- [Tubefilter: Strengere Shorts-Regeln ab 2027](https://www.tubefilter.com/2026/08/10/youtube-partner-program-ad-eligibility-requirements-shorts/)
- [vidIQ: YouTube-Monetarisierung ab 2027](https://vidiq.com/blog/post/youtube-partner-program-changes-2027/)
- [vidIQ: Shorts-Monetarisierung 2026](https://vidiq.com/blog/post/youtube-shorts-monetization/)
