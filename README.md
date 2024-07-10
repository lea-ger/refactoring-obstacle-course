# Workshop: Code Smells und Refactoring

## Kontext
Du hast den Auftrag erhalten, eine alte Codebasis zu refactorn.
Der Code ist jedoch schwer zu lesen und zu verstehen.
Aufgabe des Programms ist die Rechnungserstellung für einen Fotodruck-Shop.
Der Fotodruck-Shop bietet zwei Arten von Produkten an: Fotodrucke und Poster.
Die Rechnung soll die Anzahl der bestellten Produkte, den Preis pro Produkt und den Gesamtpreis enthalten.
Zusätzlich gilt, dass für Produkte mit dem Typ "Fotodruck" ab einer Anzahl 100 ein Rabatt auf alle Fotodrucke von 20 % gewährt wird.

## Setup
Installiere die Abhängigkeiten mit `npm install`.
Wenn du bei den Aufgaben nicht weiterkommst, schau in den `solution` Branch für eine Musterlösung.
Das Programm ausführen kannst du mit `npm run dev`.

## Aufgabe 1: Testing (optional)
Best practice wäre es erstmal, einen Test für die bestehende Funktion zu schreiben.
Schaue in die den Ordner `tests`.
Dort findest du eine leere Testdatei.
Schreibe anhand der Beschreibung, was die Funktion tun soll, einen oder mehrere Tests, die das Verhalten der Funktion überprüfen.
Die Tests kannst du mit dem Befehl `npm run test` ausführen.

## Aufgabe 2: Linting (optional)
Führe im Terminal den Befehl `npm run lint` aus.
Wie du siehst, siehst du nichts. Grund dafür ist, dass der Linter wohl vom vorherigen Entwickler deaktiviert wurde.
Gehe in die Datei `eslint.config.mjs` und entferne den Kommentar. Führe dann erneut den Befehl `npm run lint` aus.
Die Ausgabe zeigt dir, wo Code Smells in dem Code sein könnten.
Du kannst auch gerne, wie in der `eslint.config.mjs` Datei beschrieben, eigene Regeln hinzufügen. Eine Liste bestehender Regeln findest du [hier](https://eslint.org/docs/rules/).

## Aufgabe 3: Refactoring
Schaue dir die Funktion `statement` in `invoice.js` an.
Lese dabei aufmerksam und hinterlasse Kommentare an den Stellen, die dir nach Code Smells aussehen.
Verwende anschließend die Kommentare, um den Code deinem Ermessen nach zu refactorn.
Hilfe kannst du dir dabei von der Seite [Refactoring Guru](https://refactoring.guru/refactorings) holen.
In der Zeit von 30 Minuten wirst du nicht alles refactorn können, aber versuche so viel wie möglich zu verbessern.

