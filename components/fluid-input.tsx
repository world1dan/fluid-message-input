'use client'

import { useState } from 'react'

import {
    MicrophoneIcon,
    PaperclipIcon,
    PaperPlaneTiltIcon,
    SmileyIcon,
    StickerIcon,
} from '@phosphor-icons/react'
import { AnimatePresence, motion, MotionConfig, Transition } from 'motion/react'
import TextareaAutosize from 'react-textarea-autosize'

import { Button } from '@/components/ui/button'

interface MessageInputProps {
    animationDuration?: number
}

export function MessageInput({ animationDuration = 0.4 }: MessageInputProps) {
    const [value, setValue] = useState('')

    const isEmpty = value.length === 0

    const transition: Transition = {
        duration: animationDuration,
        type: 'spring',
        bounce: 0,
        filter: {
            duration: animationDuration * 0.9,
            type: 'spring',
            bounce: 0,
        },
    }

    const boxShadow = `inset 0px 2px 2px 0px rgb(255 255 255 / 0.3), inset 0px -1px 2px 0px rgb(0 0 0 / 0.12)`

    return (
        <MotionConfig transition={transition}>
            <form
                className="flex w-full items-end gap-1.5 p-3"
                onSubmit={(e) => {
                    e.preventDefault()
                    setValue('')
                }}
            >
                <Button
                    type="button"
                    variant="secondary"
                    aria-label="Add Attachment"
                    className="text-muted-foreground bg-secondary/80 size-13 rounded-full backdrop-blur-md transition-colors"
                    size="icon"
                    style={{
                        boxShadow,
                    }}
                >
                    <PaperclipIcon className="size-7" aria-hidden="true" />
                </Button>
                <motion.div
                    layout
                    layoutDependency={value}
                    className="bg-secondary/80 flex min-h-13 items-end overflow-hidden p-2 pr-2.5 backdrop-blur-md will-change-transform"
                    // Use inline style to prevent distortion during layout animations.
                    style={{
                        borderRadius: 27,
                        boxShadow,
                    }}
                >
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            layout="preserve-aspect"
                            layoutDependency={value}
                        >
                            <TextareaAutosize
                                id="message-input"
                                className="h-[36px] w-full min-w-0 resize-none px-2.5 py-1 pr-2 leading-7 font-medium text-ellipsis outline-none [&::-webkit-scrollbar]:hidden"
                                placeholder="Message"
                                autoFocus
                                minRows={1}
                                maxRows={10}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        layout="preserve-aspect"
                        layoutDependency={value}
                        className="relative flex gap-1"
                    >
                        <AnimatePresence initial={false} mode="popLayout">
                            {isEmpty ? (
                                <Button
                                    key="stickers-button"
                                    variant="ghost"
                                    className="text-muted-foreground size-9 rounded-full transition-colors will-change-[transform,opacity,filter]"
                                    size="icon"
                                    type="button"
                                    asChild
                                    aria-label="Open Sticker Picker"
                                >
                                    <motion.button
                                        initial={{
                                            scale: 0.4,
                                            opacity: 0,
                                            filter: 'blur(5px)',
                                        }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            filter: 'none',
                                        }}
                                        exit={{
                                            scale: 0.4,
                                            opacity: 0,
                                            filter: 'blur(5px)',
                                        }}
                                    >
                                        <StickerIcon
                                            className="size-7"
                                            aria-hidden="true"
                                        />
                                    </motion.button>
                                </Button>
                            ) : (
                                <Button
                                    key="emojis-button"
                                    type="button"
                                    variant="ghost"
                                    className="text-muted-foreground size-9 rounded-full transition-colors will-change-[transform,opacity,filter]"
                                    size="icon"
                                    asChild
                                    aria-label="Open Emoji Picker"
                                >
                                    <motion.button
                                        initial={{
                                            scale: 0.4,
                                            opacity: 0,
                                            filter: 'blur(5px)',
                                        }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            filter: 'none',
                                        }}
                                        exit={{
                                            scale: 0.4,
                                            opacity: 0,
                                            filter: 'blur(5px)',
                                        }}
                                    >
                                        <SmileyIcon
                                            className="size-7"
                                            aria-hidden="true"
                                        />
                                    </motion.button>
                                </Button>
                            )}
                        </AnimatePresence>
                        <AnimatePresence
                            initial={false}
                            anchorX="right"
                            mode="popLayout"
                            propagate
                        >
                            {!isEmpty && (
                                <Button
                                    key="submit-button"
                                    type="submit"
                                    className="relative left-0 h-9 w-13.5 origin-left overflow-hidden rounded-full transition-colors will-change-[transform,opacity,filter]"
                                    size="icon"
                                    aria-label="Send"
                                    asChild
                                    style={{
                                        boxShadow,
                                        borderRadius: 18,
                                    }}
                                >
                                    <motion.button
                                        layout="preserve-aspect"
                                        layoutDependency={value}
                                        initial={{
                                            scale: 0.2,
                                            opacity: 0,
                                            filter: 'blur(16px)',
                                        }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            filter: 'none',
                                            x: 0,
                                        }}
                                        exit={{
                                            scale: 0.2,
                                            opacity: 0,
                                            filter: 'blur(16px)',
                                            x: 44 / 2,
                                        }}
                                    >
                                        <motion.span
                                            aria-hidden="true"
                                            className="origin-bottom-left"
                                            initial={{
                                                x: -12,
                                                scale: 0.4,
                                            }}
                                            animate={{
                                                x: 0,
                                                scale: 1,
                                                transition: {
                                                    ...transition,
                                                    delay: 0.05,
                                                },
                                            }}
                                            exit={{ x: -8, scale: 0.4 }}
                                        >
                                            <PaperPlaneTiltIcon
                                                className="size-6"
                                                weight="fill"
                                            />
                                        </motion.span>
                                    </motion.button>
                                </Button>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
                <AnimatePresence initial={false} mode="popLayout">
                    {isEmpty && (
                        <Button
                            key="voice-message-button"
                            type="button"
                            variant="secondary"
                            aria-label="Voice Message"
                            className="text-muted-foreground bg-secondary/80 size-13 rounded-full backdrop-blur-md transition-colors"
                            size="icon"
                            asChild
                            style={{
                                boxShadow,
                            }}
                        >
                            <motion.button
                                className="origin-right"
                                aria-hidden="true"
                                initial={{
                                    x: 'calc(100% + 14px)',
                                }}
                                animate={{ x: 0, scale: 1 }}
                                exit={{
                                    x: 'calc(100% + 14px)',
                                }}
                            >
                                <MicrophoneIcon className="size-8" />
                            </motion.button>
                        </Button>
                    )}
                </AnimatePresence>
            </form>
        </MotionConfig>
    )
}
