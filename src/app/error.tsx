"use client";
import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
        reset();
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold text-red-500">Error</h1>
            <p className="text-red-500">{error.message}</p>
        </div>
    )
}