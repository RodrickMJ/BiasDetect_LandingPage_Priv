export default function Icon({ name }) {
    const icons = {
        home: (
            <path d="M12 2L2 12h3v8h14v-8h3L12 2z" />
        ),
        smile: (
            <>
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
            </>
        ),
        clock: (
            <>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
            </>
        ),
        layers: (
            <>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </>
        ),
        alert: (
            <>
                <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10z" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
            </>
        ),
        cube: (
            <>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </>
        )
    }

    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {icons[name]}
        </svg>
    )
}