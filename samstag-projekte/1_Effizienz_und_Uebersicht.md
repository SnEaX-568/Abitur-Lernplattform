# Projekt 1: Effizienz steigern (+ Gesamtübersicht für Samstag)

> **So benutzt du diese Dateien:** Lege alle 4 Dateien in einen Ordner auf deinem Rechner, öffne dort Claude Code und schreib z. B.:
> `Lies 1_Effizienz_und_Uebersicht.md und starte mit Schritt 1.`
> Jede Datei hat unten fertige **Start-Prompts** – einfach kopieren.

---

## 🗺️ Gesamtübersicht – deine Gedanken, geordnet

| Reihenfolge | Projekt | Warum an dieser Stelle | Zeit (du) |
|---|---|---|---|
| **1** | Effizienz (diese Datei) | Macht alle anderen Projekte schneller & besser. 30 Min. Einsatz, wirkt dauerhaft. | ~30 Min. |
| **2** | Orbit Rush veröffentlichen | **Zeitkritisch:** Google verlangt 14 Tage Test mit 12 Testern. Je früher die Uhr läuft, desto früher bist du live. | ~1–2 Std. |
| **3** | Shorts (TikTok/Insta/YouTube) | Erste Videos = **Orbit-Rush-Clips** → bringen Tester & später Downloads. Zwei Fliegen, eine Klappe. | ~1 Std. |
| **4** | Anruf-Assistent | Braucht dich vor Ort an der Fritz!Box, kein Zeitdruck. | ~2 Std. |

### Was Claude **ohne dich** erledigen kann (du sagst nur „Start“)
- ✅ Globale `CLAUDE.md` („Soul-Datei“) schreiben – du liest nur gegen
- ✅ Orbit Rush: Meteoriten-Sichtbarkeit + „Reduzierte Effekte“ programmieren
- ✅ Orbit Rush: Store-Texte, Datenschutzerklärung, Tester-Einladungstext
- ✅ Shorts: Video-Ideen, Skripte, Untertitel, Hashtags, Content-Plan für 4 Wochen
- ✅ Shorts: einfache Videos per Code (Text-Animationen, Gameplay-Schnitte mit ffmpeg)
- ✅ Anruf-Assistent: KI-Prompt, Make-Bauplan, Mailbox-Ansage-Text

### Was **nur du** machen kannst
- 🔑 Logins, Konten, Zahlungen, Uploads (TikTok/YouTube/Play Console)
- 🔑 Fritz!Box einstellen, Rufumleitung auf dem Handy
- 🔑 12 Tester finden (Freunde/Familie/Klasse)
- 🔑 Sprache einsprechen / Gesicht in Videos

---

## ⚠️ Wichtig: Was ich (Claude) NICHT weiß
Ich habe **keinen Zugriff auf andere Chats oder Erinnerungen** – nur auf diesen Chat. Deshalb:
- Zu **Orbit Rush** kenne ich nur, was du hier geschrieben hast (Google-Konto bestätigt, Meteoriten-Sichtbarkeit, sanftere Effekte). Den Code muss Claude Code auf deinem Rechner erst lesen.
- Zur **„Soul-Datei“** kenne ich den Inhalt nicht. Wenn du schon eine hast: in den Ordner legen, Claude baut sie ein.
- Fehlende Infos stehen in jeder Datei unter **„Offene Fragen“**.

---

## Projekt 1 im Detail: Claude effizienter nutzen

### Ziel
Claude kennt dich, deine Projekte und deinen Stil – ohne dass du jedes Mal alles neu erklärst.

### Die wichtigsten Hebel (aus Recherche, nach Wirkung sortiert)

1. **Globale `CLAUDE.md` = deine „Soul-Datei“**
   - Liegt unter `~/.claude/CLAUDE.md` (Windows: `C:\Users\DEINNAME\.claude\CLAUDE.md`).
   - Wird in **jeder** Claude-Code-Sitzung automatisch geladen.
   - **Kurz halten** (unter ~100 Zeilen) – jede Zeile kostet Platz im Gedächtnis von Claude. Lieber präzise als lang.
2. **Projekt-`CLAUDE.md`** in jedem Projektordner (z. B. Orbit Rush): Was ist das Projekt, wie startet/baut man es, was sind die Regeln. Claude kann sie selbst mit `/init` anlegen.
3. **Ein Chat pro Aufgabe.** Mit `/clear` neu starten, wenn das Thema wechselt. Lange, gemischte Chats machen Claude ungenauer.
4. **Erst planen, dann machen:** Bei größeren Aufgaben `Shift+Tab` → **Plan-Modus**. Claude zeigt erst den Plan, du sagst ok.
5. **Gute Aufträge** nach dem Schema: **Ziel – Kontext – Was fertig heißt – Format.**
6. **Ergebnisse in Dateien statt im Chat.** Dateien bleiben, Chats verschwinden.
7. **GitHub als Brücke:** Dateien, die ich in der Cloud erstelle, landen auf GitHub → du holst sie auf deinen PC (und umgekehrt).
8. **Verbindungen (Connectors):** Google Kalender & Gmail sind bei dir bereits verbunden. Damit kann Claude Termine eintragen und Mails lesen/entwerfen.
9. **Arbeiten lassen, während du weg bist:** **Claude Code im Web/in der App** (claude.ai/code) läuft in der Cloud – **dein PC muss dafür nicht an sein.** Du startest morgens vom Handy eine Aufgabe, abends ist sie fertig.
   - Nutzungslimit: wird in Zeitfenstern von ca. 5 Stunden zurückgesetzt. Große Aufgaben also früh am Tag starten.
10. **Wiederkehrendes automatisieren:** „Geplante Aufgaben“ (z. B. jeden Samstag 8 Uhr: „Erstelle 3 neue Short-Skripte“).

> Hinweis: YouTube/TikTok-Videos selbst kann ich nicht ansehen, nur Webseiten durchsuchen. Die Tipps oben stammen aus Anthropic-Doku und Erfahrungsberichten (Quellen unten).

### Deine To-dos (nur du)
- [ ] Ordner auf dem PC anlegen, z. B. `C:\Projekte\` mit Unterordnern `orbit-rush`, `shorts`, `anruf-assistent`
- [ ] Falls vorhanden: deine bisherige „Soul-Datei“ in den Ordner legen
- [ ] Entwurf unten lesen, „Über mich“ korrigieren
- [ ] Prompt A in Claude Code starten

### Entwurf: globale `CLAUDE.md` (zum Anpassen)
```markdown
# Über mich
- [Dein Name], Schüler (Abitur), Deutschland. Arbeite samstags, Projekte nebenbei.
- Sprache: Deutsch, locker, direkt. Kein Fachchinesisch ohne Erklärung.

# Wie du arbeiten sollst
- Erst Kurzantwort/Empfehlung, dann Details.
- Bei Plänen: kostenlos zuerst, dann kostenpflichtig mit Preis.
- Alles, was du allein kannst, machst du allein. Frag nur, wenn es wirklich nötig ist.
- Am Ende jeder Aufgabe: kurze Liste „Erledigt / Offen / Was ich (ich) tun muss“.
- Ergebnisse als Dateien speichern, nicht nur im Chat.
- Weise mich hin, wenn ich effizienter fragen oder arbeiten könnte.
- Sag ehrlich, wenn etwas nicht geht oder Infos veraltet sein könnten.

# Meine Projekte
- Orbit Rush: Handyspiel, Ziel Google Play. Barrierefreiheit wichtig (Sichtbarkeit, sanfte Effekte).
- Shorts: TikTok/Instagram/YouTube, Ziel Reichweite + später Einnahmen.
- Anruf-Assistent: Fritz!Box-Mailbox → Make.com → Gemini → Google Kalender + Telegram.
- Abitur-Lernplattform (GitHub).

# Code-Regeln
- Vor Änderungen kurz Plan zeigen, bei großen Änderungen Plan-Modus.
- Nach Änderungen testen/starten und Ergebnis zeigen.
- Kleine, verständliche Commits auf Deutsch.
```

### 🚀 Start-Prompts

**Prompt A – Soul-Datei einrichten**
```
Lies 1_Effizienz_und_Uebersicht.md. Erstelle daraus meine globale CLAUDE.md
unter ~/.claude/CLAUDE.md. Falls im Ordner schon eine alte Soul-/CLAUDE-Datei
liegt, führe beide sinnvoll zusammen (max. 100 Zeilen). Zeig mir das Ergebnis
und frag mich nur, wenn etwas widersprüchlich ist.
```

**Prompt B – Projekt-CLAUDE.md für jedes Projekt**
```
Geh in jeden Unterordner von C:\Projekte (orbit-rush, shorts, anruf-assistent).
Lege dort mit den Infos aus den passenden Projektdateien (2_, 3_, 4_) eine
kurze CLAUDE.md an: Ziel, Stand, nächste Schritte, Regeln.
```

**Prompt C – Danach alles der Reihe nach**
```
Arbeite die Projekte in der Reihenfolge aus der Gesamtübersicht ab.
Mach bei jedem Projekt zuerst alle Punkte aus „Was Claude allein kann“.
Sammle alles, was ich selbst tun muss, in einer Datei MEINE_TODOS.md.
```

### Offene Fragen
- Gibt es die „Soul-Datei“ schon? Wenn ja: wo liegt sie?
- Windows oder Mac?

### Quellen
- [Anthropic: Using CLAUDE.md files](https://www.claude.com/blog/using-claude-md-files)
- [Builder.io: Claude Code tips](https://builder.io/blog/claude-code-tips-best-practices)
- [DEV: 30 Claude Code tips from power users](https://dev.to/claudeguide/30-claude-code-tips-from-power-users-2026-1gh3)
- [DEV: CLAUDE.md best practices](https://dev.to/nishilbhave/claudemd-best-practices-the-complete-2026-guide-435j)
- [DataCamp: Claude Code best practices](https://www.datacamp.com/ru/tutorial/claude-code-best-practices)
