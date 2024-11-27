'use client'

import React from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import Image from 'next/image'

export default function Contacts() {
    return (
        <section
            className="flex flex-col items-center justify-between gap-4 py-3 flex-grow flex-shrink-0 basis-auto"
            style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
        >
            <div className="w-[320px] flex flex-col items-center justify-between gap-4">
                <h1 className="text-2xl font-bold">Kontakte</h1>
                <Separator />
                <p className="text-balance text-center">
                    Wenn du <span className="text-green-500">Ideen</span> hast, wie ich mein Projekt
                    verbessern kann, einen <span className="text-red-500">Fehler </span>
                    gefunden hast oder einfach Feedback geben möchtest – ob{' '}
                    <span className="text-orange-500">positiv</span> oder
                    <span className="text-blue-500"> negativ</span> 😉 –{' '}
                    <span className="text-yellow-500">schreib mir!</span> Ich bin immer offen für
                    Vorschläge und Rückmeldungen. ✉️
                </p>
                <div className="flex gap-4 mt-4">
                    <Link
                        href="#"
                        onClick={e => {
                            window.location.href = 'mailto:dmytro.herashchenko.de@gmail.com'
                            e.preventDefault()
                        }}
                    >
                        <Image
                            src="/social_icons/7101527_gmail_email_mail_icon.svg"
                            alt="icon"
                            width={40}
                            height={40}
                        />
                    </Link>

                    <Link target="_blank" href="https://www.linkedin.com/in/herashchenko-dmytro/">
                        <Image
                            src="/social_icons/6214505_linkedin_logo_icon.svg"
                            alt="icon"
                            width={40}
                            height={40}
                        />
                    </Link>

                    <Link target="_blank" href="https://github.com/stoczec">
                        <Image
                            src="/social_icons/6214513_github_logo_icon.svg"
                            alt="icon"
                            width={40}
                            height={40}
                        />
                    </Link>

                    <Link target="_blank" href="https://wa.me/4915120495620">
                        <Image
                            src="/social_icons/6214499_handset_logo_telephone_whatsapp_icon.svg"
                            alt="icon"
                            width={40}
                            height={40}
                        />
                    </Link>

                    <Link target="_blank" href="https://t.me/DmytroHerashchenko">
                        <Image
                            src="/social_icons/6214504_air_airplane_logo_paper_plane_icon.svg"
                            alt="icon"
                            width={40}
                            height={40}
                        />
                    </Link>
                </div>
                <Separator />
                <p className="text-balance text-center">
                    Ich möchte auch meinem Schatz Anastasiia für die Inspiration, Hilfe und
                    Unterstützung danken.❤️
                </p>
            </div>
        </section>
    )
}
