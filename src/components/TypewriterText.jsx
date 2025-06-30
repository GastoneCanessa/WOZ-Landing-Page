import React, { useState, useEffect } from "react";

export const TypewriterText = ({ words, typingSpeed = 1000, pause = 10000 }) => {
    const [index, setIndex] = useState(0);        // parola corrente
    const [text, setText] = useState("");         // testo visibile
    const [charIndex, setCharIndex] = useState(0); // lettera corrente

    useEffect(() => {
        const currentWord = words[index];

        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentWord[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                const nextIndex = (index + 1) % words.length;
                setIndex(nextIndex);
                setText("");
                setCharIndex(0);
            }, pause);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, index, words, typingSpeed, pause]);

    return (
        <>
            {text}
            <span className="blinking-cursor">|</span>
        </>
    );
};
