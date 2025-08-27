'use client'; // Required for App Router. Safe for Pages Router too.

import { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

export default function CalendlyButton({
    url = 'https://calendly.com/ahmed-fouad-gtcfx/ifx-expo-ahmed-fouad',
    text = 'Book Appointment',
    className,
}) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && document?.body) {
            setShow(true);
        }
    }, []);

    if (!show) return null;

    return (
        <PopupButton
            url={url}
            rootElement={document.body} // This always works
            text={text}
            className={className || `px-4 py-2 bg-primary text-white rounded hover:bg-secondary`}
        />
    );
}