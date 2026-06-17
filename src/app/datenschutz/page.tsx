import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Datenschutzerklärung – Wortkarte',
    description: 'Datenschutzerklärung der Lern-App Wortkarte.',
}

export default function DatenschutzPage() {
    return (
        <section className="flex flex-col items-center justify-start py-6 flex-grow flex-shrink-0 basis-auto">
            <article className="w-full max-w-2xl px-4 text-start leading-relaxed text-muted-foreground">
                <h1 className="text-2xl font-bold mb-5 text-foreground">Datenschutzerklärung</h1>

                <h2 className="text-base font-semibold mt-6 mb-1.5 text-foreground">
                    1. Verantwortlicher
                </h2>
                <p className="mb-1">
                    Dmytro Herashchenko
                    <br />
                    E-Mail:{' '}
                    <a href="mailto:dmytro.herashchenko.de@gmail.com" className="underline">
                        dmytro.herashchenko.de@gmail.com
                    </a>
                </p>

                <h2 className="text-base font-semibold mt-6 mb-1.5 text-foreground">
                    2. Hosting (Vercel)
                </h2>
                <p className="mb-1">
                    Diese Website wird bei der Vercel Inc. (USA) gehostet. Beim Aufruf werden
                    technisch notwendige Daten (insbesondere IP-Adresse, Datum und Uhrzeit,
                    aufgerufene Seite, User-Agent) in Server-Logfiles verarbeitet (Art. 6 Abs. 1 lit.
                    f DSGVO; berechtigtes Interesse am sicheren und stabilen Betrieb). Die Speicherung
                    erfolgt kurzzeitig. Die Übermittlung in die USA stützt sich auf den
                    Angemessenheitsbeschluss der EU-Kommission (EU-US Data Privacy Framework, Art. 45
                    DSGVO); Vercel ist zertifiziert. Mit Vercel besteht ein Vertrag zur
                    Auftragsverarbeitung.
                </p>

                <h2 className="text-base font-semibold mt-6 mb-1.5 text-foreground">
                    3. Bilder der Lernkarten
                </h2>
                <p className="mb-1">
                    Die assoziativen Bilder der Lernkarten werden über den Dienst UploadThing
                    (utfs.io) ausgeliefert. Beim Laden eines Kartenbildes wird deine IP-Adresse an
                    diesen Dienst übermittelt, damit das Bild an deinen Browser ausgeliefert werden
                    kann (Art. 6 Abs. 1 lit. f DSGVO; berechtigtes Interesse an der Auslieferung der
                    Bildinhalte). Es werden dabei keine weiteren personenbezogenen Daten übertragen.
                </p>

                <h2 className="text-base font-semibold mt-6 mb-1.5 text-foreground">
                    4. Keine Cookies, kein Tracking
                </h2>
                <p className="mb-1">
                    Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken und nutzt kein
                    Tracking. Es werden keine personenbezogenen Daten zu Werbezwecken an Dritte
                    weitergegeben.
                </p>

                <h2 className="text-base font-semibold mt-6 mb-1.5 text-foreground">
                    5. Lokale Speicherung (localStorage)
                </h2>
                <p className="mb-1">
                    Zur Speicherung deiner Favoriten (markierte Lernkarten) und deiner Einstellungen
                    (z. B. Design) wird der localStorage deines Browsers genutzt. Diese Daten
                    verbleiben ausschließlich auf deinem Gerät und werden nicht an uns oder Dritte
                    übertragen. Du kannst sie jederzeit über die Einstellungen deines Browsers
                    löschen. Rechtsgrundlage: § 25 Abs. 2 TDDDG (technisch erforderlich).
                </p>

                <h2 className="text-base font-semibold mt-6 mb-1.5 text-foreground">6. Schriften</h2>
                <p className="mb-1">
                    Schriftarten werden lokal von diesem Server geladen (self-hosted). Es findet
                    keine Verbindung zu Google Fonts oder anderen Drittanbietern statt; dabei werden
                    keine Daten an Dritte übermittelt.
                </p>

                <h2 className="text-base font-semibold mt-6 mb-1.5 text-foreground">7. Deine Rechte</h2>
                <p className="mb-1">
                    Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art.
                    17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und
                    Widerspruch (Art. 21 DSGVO). Wende dich dazu an den oben genannten
                    Verantwortlichen. Du hast außerdem das Recht, dich bei einer
                    Datenschutz-Aufsichtsbehörde zu beschweren.
                </p>

                <h2 className="text-base font-semibold mt-6 mb-1.5 text-foreground">
                    8. Keine automatisierte Entscheidungsfindung
                </h2>
                <p className="mb-1">
                    Es findet kein Profiling und keine automatisierte Entscheidungsfindung (Art. 22
                    DSGVO) statt.
                </p>

                <p className="mt-7 text-sm text-muted-foreground">Stand: Juni 2026</p>
            </article>
        </section>
    )
}
