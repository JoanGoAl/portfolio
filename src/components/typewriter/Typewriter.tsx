"use client"
import Typewriter from 'typewriter-effect';

export default function TypeWriter({ strings }: { strings: string[] }) {

    return <Typewriter
        options={{
            strings,
            autoStart: true,
            loop: true,
        }}
    />
}