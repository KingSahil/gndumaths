import React, { useEffect, useRef } from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';

const MathBlock = ({ children, block = false }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            try {
                katex.render(children, containerRef.current, {
                    displayMode: block,
                    throwOnError: false,
                });
            } catch (error) {
                console.error("KaTeX rendering error:", error);
                containerRef.current.textContent = children;
            }
        }
    }, [children, block]);

    return (
        <span
            ref={containerRef}
            className={`math-block ${block ? 'block my-4 text-center text-lg' : 'inline-block'}`}
        />
    );
};

export default MathBlock;
