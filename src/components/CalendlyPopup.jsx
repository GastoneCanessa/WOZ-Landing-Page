import { PopupButton } from "react-calendly";
import React, { useEffect, useState } from "react";

export const CalendlyPopup = () => {
    const [rootElement, setRootElement] = useState(null);

    useEffect(() => {
        setRootElement(document.getElementById("root"));
    }, []);

    if (!rootElement) return null; // oppure mostra un loader

    return (
        <PopupButton
            className="calendly-custom-button"
            url="https://calendly.com/gastonecanessa"
            rootElement={rootElement}
            text="Registrati/prenota"
        />
    );
    };