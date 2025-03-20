"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { i18n,type Locale } from "../i18n-config"
import FlagColombia from '@/images/flags/colombia'
import FlagUnitedState from '@/images/flags/united-states'

export default function LocaleSwitcher() {
    const pathName = usePathname()
    const redirectedPathName = (locale: Locale) => {
        if (!pathName) return "/"
        const segments = pathName.split("/")
        segments[1] = locale
        return segments.join("/")
    }

    return (
        <div className='flex gap-0.5'>
            {i18n.locales.map((locale) => {
                return (
                    <div key={locale}>
                        <Link href={redirectedPathName(locale)}>{
                            locale === 'es' ?
                                <FlagColombia
                                    width={20}
                                    height={20}
                                />
                                :
                                <FlagUnitedState
                                    width={20}
                                    height={20}
                                />
                        }</Link>
                    </div>
                )
            })}
        </div>
    )
}