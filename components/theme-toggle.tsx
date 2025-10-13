'use client'

import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'

import { Toggle } from '@/components/ui/toggle'

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const isDark = (theme ?? resolvedTheme) === 'dark'

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted)
        return (
            <Toggle
                aria-label="Toggle dark mode"
                disabled
                variant="outline"
                size="sm"
                pressed
                className="size-11 rounded-full !p-0"
            />
        )

    async function handleThemeChange() {
        const nextResolvedTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

        function update() {
            setTheme(nextResolvedTheme)
        }

        if (
            document.startViewTransition &&
            nextResolvedTheme !== resolvedTheme
        ) {
            document.documentElement.style.viewTransitionName =
                'theme-transition-quick'

            await document.startViewTransition(update).finished
            document.documentElement.style.viewTransitionName = ''
        } else {
            update()
        }
    }

    return (
        <Toggle
            aria-label="Toggle dark mode"
            pressed={isDark}
            onPressedChange={() => handleThemeChange()}
            variant="outline"
            size="sm"
            className="!text-muted-foreground size-11 rounded-full !p-0"
        >
            {isDark ? (
                <MoonIcon className="size-5" weight="bold" />
            ) : (
                <SunIcon className="size-5" weight="bold" />
            )}
        </Toggle>
    )
}
