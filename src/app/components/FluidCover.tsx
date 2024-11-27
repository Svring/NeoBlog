'use client';

import { useEffect, useRef } from 'react';
import WebGLFluidEnhanced from 'webgl-fluid-enhanced';

export default function FluidCover() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const simulation = new WebGLFluidEnhanced(containerRef.current);

            simulation.setConfig({
                brightness: 0.3,
                backgroundColor: "#000000",
                colorPalette: ["#FFFFFF"],
            });

            simulation.start();

            return () => {
                simulation.stop();
            };
        }
    }, []);

    return <div className="absolute inset-0 z-0" ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
}
