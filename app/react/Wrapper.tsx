'use client';

export default function Wrapper({children}:{children: React.ReactNode}) {
    console.log("Wrapper rendered")
    return (
        <div>
            {children}
        </div>
    )
}