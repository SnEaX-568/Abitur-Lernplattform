# Projekt 2: Orbit Rush veröffentlichen

**Stand:** Google-Play-Entwicklerkonto ist bestätigt ✅
**Ziel:** Orbit Rush öffentlich im Play Store.
**Wichtigste Erkenntnis:** Bei neuen **privaten** Entwicklerkonten verlangt Google vorher einen **geschlossenen Test mit mind. 12 Testern, die 14 Tage am Stück dabei sind**. → Diesen Test **so früh wie möglich starten** – die Uhr ist der Engpass, nicht der Code.

---

## Weg zur Veröffentlichung

```
[1] Änderungen einbauen (Meteoriten, sanfte Effekte)      ← Claude allein
[2] App-Bundle (.aab) bauen + signieren                    ← Claude + du (Passwort)
[3] Store-Eintrag: Texte, Icon, Screenshots, Grafik        ← Claude erstellt, du lädst hoch
[4] Pflichtangaben in der Play Console                     ← du (Claude gibt dir die Antworten vor)
[5] Geschlossener Test starten, 12 Tester einladen         ← du
[6] 14 Tage warten, Tester spielen lassen, Feedback fixen  ← Claude fixt
[7] Produktionszugriff beantragen → Veröffentlichen        ← du
```
Realistisch: **live in ca. 3 Wochen**, wenn der Test diese Woche startet.

---

## [1] Änderungsliste (Claude erledigt das allein)

### A) Meteoriten besser sichtbar
Problem: Meteoriten gehen im Hintergrund unter.
- Neue Option **„Meteoriten hervorheben“** (Einstellungen), Stufen: Aus / Normal / Stark
  - heller Umriss bzw. Glow um jeden Meteoriten
  - etwas mehr Kontrast/Helligkeit, optional leicht größere Darstellung
  - optional: kleiner Warnpfeil am Bildschirmrand, bevor ein Meteorit reinfliegt
- Auch ohne Option: Standard-Kontrast leicht anheben, wenn der Hintergrund ähnlich gefärbt ist.

### B) „Reduzierte Effekte“ (für empfindliche Menschen)
Problem: Bisher sind nur die Combo-Effekte abschwächbar.
- Eine **gemeinsame Option „Sanfte Effekte“**, die ALLES abdeckt:
  - Combo-Effekte (bestehend → einbinden)
  - **Explosionen:** kleiner, kürzer, weniger Partikel, kein greller Blitz
  - **Konfetti:** weniger Teile, langsamer, kürzer
  - **Bildschirmwackeln (Screenshake):** aus
  - **Blitzen/Flackern:** aus (wichtig wegen Lichtempfindlichkeit)
- Automatisch an, wenn auf dem Handy „Animationen entfernen“ aktiviert ist (Android-Bedienungshilfe).
- Beim ersten Spielstart kurz anbieten: „Sanfte Effekte aktivieren?“

### C) Technische Pflichtpunkte prüfen
- Ziel-API-Level aktuell? (Google verlangt für neue Apps ein aktuelles Android-Level – die Play Console zeigt eine Warnung, falls nicht.)
- App als **Android App Bundle (.aab)**
- Versionsnummer gesetzt, App-ID (z. B. `de.deinname.orbitrush`) final – **später nicht mehr änderbar!**
- Keine Debug-Logs/Testcheats in der Release-Version

## [3] Store-Eintrag (Claude erstellt alles)
- App-Name (max. 30 Zeichen), Kurzbeschreibung (80), Langbeschreibung (4000) – Deutsch + Englisch
- Icon 512×512, Feature-Grafik 1024×500, mind. 2 Screenshots
- Datenschutzerklärung als Webseite (Pflicht!) – kann z. B. über GitHub Pages laufen, wie bei deiner Lernplattform (`datenschutz.html`)

## [4] Pflichtangaben in der Play Console (du klickst, Claude sagt dir die Antworten)
- Inhaltseinstufung (Fragebogen)
- Zielgruppe & Inhalte (Altersgruppe)
- Datensicherheit („Data safety“): Welche Daten sammelt das Spiel? (Wenn keine Werbung/Analyse: fast alles „Nein“)
- Werbung ja/nein, App-Zugriff (Login nötig? vermutlich nein)

## [5] 12 Tester finden – Ideen
- Familie, Freunde, Klasse, Arbeitskollegen (jeder braucht ein Google-Konto)
- Einladung per Link – Claude schreibt dir einen netten WhatsApp-Text
- Shorts-Projekt nutzen: „Suche Tester für mein erstes Spiel“-Video
- Tipp: **15–20 einladen**, falls jemand abspringt. Tester sollen das Spiel in den 14 Tagen **wirklich ein paar Mal öffnen**.
- Den Test **nicht pausieren**, sonst kann die Uhr neu starten.

---

## Deine To-dos (nur du)
- [ ] Projektordner von Orbit Rush in Claude Code öffnen
- [ ] Prompt A starten (Änderungen)
- [ ] Beim Signieren: Passwort für den Upload-Schlüssel festlegen & **sicher aufbewahren**
- [ ] In der Play Console: App anlegen, Store-Eintrag einfügen, Fragebögen ausfüllen
- [ ] Geschlossenen Test anlegen, .aab hochladen, 15–20 Tester einladen
- [ ] In 14 Tagen: Produktionszugriff beantragen

## 🚀 Start-Prompts

**Prompt A – Barrierefreiheit einbauen**
```
Lies 2_Orbit_Rush.md. Analysiere zuerst den Code von Orbit Rush und leg eine
CLAUDE.md an (Engine, Start, Build). Setz dann Abschnitt [1] A und B komplett um:
Option "Meteoriten hervorheben" und Option "Sanfte Effekte" (Explosionen,
Konfetti, Combo, Screenshake, Blitze), inkl. Erkennung von Androids
"Animationen entfernen". Starte das Spiel, teste beide Optionen und zeig
mir Screenshots vorher/nachher.
```

**Prompt B – Release vorbereiten**
```
Prüfe Abschnitt [1] C aus 2_Orbit_Rush.md und behebe alles. Bau ein signiertes
.aab und erklär mir Schritt für Schritt, was ich beim Schlüssel tun muss.
```

**Prompt C – Store-Material**
```
Erstelle für Orbit Rush alles aus Abschnitt [3]: Texte (DE+EN), Icon,
Feature-Grafik, Screenshots und eine Datenschutzerklärung. Lege alles in
den Ordner store/. Schreib zusätzlich eine Datei PLAY_CONSOLE_ANTWORTEN.md
mit den Antworten für alle Fragebögen aus Abschnitt [4] und einen
WhatsApp-Text, mit dem ich Tester einlade.
```

## Offene Fragen
- Womit ist Orbit Rush gebaut? (Unity, Godot, Flutter, Web/HTML?)
- Hat das Spiel Werbung, Käufe in der App oder Online-Funktionen?
- Bist du über 18? (Wichtig, falls später Geld über das Spiel reinkommen soll.)

## Quellen
- [Google: Testanforderungen für neue private Entwicklerkonten](https://support.google.com/googleplay/android-developer/answer/14151465)
- [Android Authority: Google Play app testing requirement](https://www.androidauthority.com/google-play-app-testing-requirement-3510580)
- [ProAndroidDev: 12 Tester finden](https://proandroiddev.com/how-to-get-12-testers-for-google-play-closed-testing-and-actually-pass-6a2ab52a0779)
