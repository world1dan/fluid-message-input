'use client'

import { useState } from 'react'
import Image from 'next/image'

import bg1 from '@/assets/bg-1.jpg'
import bg2 from '@/assets/bg-2.jpg'
import bg3 from '@/assets/bg-3.jpg'
import { SiGithub, SiX } from '@icons-pack/react-simple-icons'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { MessageInput } from '@/components/fluid-input'
import { ThemeToggle } from '@/components/theme-toggle'

const BACKGROUNDS = [bg3, bg2, bg1]

export default function Home() {
    const [backgroundIndex, setBackgroundIndex] = useState(0)
    const [animationDuration, setAnimationDuration] = useState(0.4)

    return (
        <div className="mx-auto min-h-screen max-w-2xl gap-16 p-6 pb-20 sm:p-20">
            <main className="flex flex-col items-center gap-8 sm:items-start">
                <div className="flex w-full max-w-[400px] flex-wrap justify-between gap-5 opacity-65 transition-opacity hover:opacity-100">
                    <div className="flex flex-col justify-between gap-2.5 max-sm:w-full">
                        <span className="text-muted-foreground text-sm font-medium">
                            Animation Duration
                        </span>
                        <ToggleGroup
                            type="single"
                            value={animationDuration.toString()}
                            onValueChange={(val) => {
                                if (val !== '')
                                    setAnimationDuration(Number(val))
                            }}
                            className="bg-secondary/60 text-muted-foreground border-muted-foreground/15 gap-1 rounded-full border p-1"
                        >
                            <ToggleGroupItem
                                value="0.3"
                                aria-label="0.3s"
                                className="px-3"
                            >
                                0.3s
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="0.4"
                                aria-label="0.4s"
                                className="px-3"
                            >
                                0.4s
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="1"
                                aria-label="1s"
                                className="px-2"
                            >
                                1s
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="5"
                                aria-label="4s"
                                className="px-2"
                            >
                                4s
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                    <div className="flex flex-col justify-between gap-2.5">
                        <span className="text-muted-foreground text-sm font-medium">
                            Background
                        </span>
                        <ToggleGroup
                            type="single"
                            value={backgroundIndex.toString()}
                            onValueChange={(val) => {
                                if (val !== '') setBackgroundIndex(Number(val))
                            }}
                            className="bg-secondary/60 text-muted-foreground border-muted-foreground/15 gap-1 rounded-full border p-1"
                        >
                            {BACKGROUNDS.map((bg, idx) => (
                                <ToggleGroupItem
                                    key={idx}
                                    value={idx.toString()}
                                    aria-label={`Background ${idx + 1}`}
                                    className="px-0"
                                >
                                    <span className="size-9 rounded-full p-1">
                                        <Image
                                            src={bg}
                                            alt={`bg${idx}`}
                                            width={36}
                                            height={36}
                                            className="pointer-events-none h-full w-full rounded-full object-cover select-none"
                                        />
                                    </span>
                                </ToggleGroupItem>
                            ))}
                        </ToggleGroup>
                    </div>
                    <div className="flex flex-col justify-between gap-2.5">
                        <span className="text-muted-foreground text-sm font-medium">
                            Theme
                        </span>
                        <ThemeToggle />
                    </div>
                </div>
                <div
                    className="squircle relative flex min-h-[370px] w-full max-w-[400px] items-end overflow-hidden rounded-[38px] not-dark:shadow-2xl supports-[corner-shape:superellipse(2)]:rounded-[76px]"
                    style={{
                        // @ts-expect-error - doesn't have types yet.
                        cornerShape: 'superellipse(2)',
                    }}
                >
                    <Image
                        src={BACKGROUNDS[backgroundIndex]}
                        alt="bg"
                        priority
                        className="pointer-events-none absolute bottom-0 h-[100%] object-cover object-center select-none"
                    />
                    <MessageInput animationDuration={animationDuration} />
                </div>
            </main>
            <footer className="mt-[80px] flex w-full max-w-sm flex-wrap items-center justify-between gap-[32px]">
                <a
                    className="text-muted-foreground flex items-center gap-2 text-sm font-medium opacity-65 transition-opacity hover:underline hover:underline-offset-4 hover:opacity-100"
                    href="https://github.com/world1dan/fluid-message-input"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiGithub size={16} />
                    Source
                </a>
                <a
                    className="text-muted-foreground flex items-center gap-2 text-sm font-medium opacity-65 transition-opacity hover:underline hover:underline-offset-4 hover:opacity-100"
                    href="https://x.com/world1dan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiX size={16} /> @world1dan
                </a>
            </footer>
        </div>
    )
}
