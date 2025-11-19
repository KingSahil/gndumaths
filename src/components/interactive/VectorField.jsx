import React, { useEffect, useRef, useState } from 'react';
import MathBlock from '../MathBlock';

const VectorField = () => {
    const canvasRef = useRef(null);
    const [fieldType, setFieldType] = useState('source'); // source, sink, vortex, saddle

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;

        // Clear canvas
        ctx.fillStyle = '#f8fafc'; // slate-50
        ctx.fillRect(0, 0, width, height);

        const gridSize = 20;
        const spacing = 25;

        // Vector Functions
        const getVector = (x, y) => {
            // Normalize coordinates (-10 to 10)
            const nx = (x - centerX) / 15;
            const ny = (y - centerY) / 15; // Canvas Y is inverted relative to math Y

            let vx = 0, vy = 0;

            switch (fieldType) {
                case 'source':
                    vx = nx; vy = ny;
                    break;
                case 'sink':
                    vx = -nx; vy = -ny;
                    break;
                case 'vortex':
                    vx = -ny; vy = nx;
                    break;
                case 'saddle':
                    vx = nx; vy = -ny;
                    break;
                default:
                    vx = 1; vy = 0;
            }

            // Normalize vector length for visualization
            const mag = Math.sqrt(vx * vx + vy * vy);
            const scale = Math.min(mag, 1) * 15; // Max length

            if (mag === 0) return { vx: 0, vy: 0 };
            return { vx: (vx / mag) * scale, vy: (vy / mag) * scale };
        };

        // Draw Vectors
        ctx.strokeStyle = '#6366f1'; // indigo-500
        ctx.lineWidth = 1.5;

        for (let x = spacing / 2; x < width; x += spacing) {
            for (let y = spacing / 2; y < height; y += spacing) {
                const { vx, vy } = getVector(x, y);

                if (vx === 0 && vy === 0) continue;

                // Draw arrow
                ctx.beginPath();
                ctx.moveTo(x - vx / 2, y - vy / 2);
                ctx.lineTo(x + vx / 2, y + vy / 2);
                ctx.stroke();

                // Arrowhead
                const angle = Math.atan2(vy, vx);
                const headLen = 4;
                const endX = x + vx / 2;
                const endY = y + vy / 2;

                ctx.beginPath();
                ctx.moveTo(endX, endY);
                ctx.lineTo(endX - headLen * Math.cos(angle - Math.PI / 6), endY - headLen * Math.sin(angle - Math.PI / 6));
                ctx.lineTo(endX - headLen * Math.cos(angle + Math.PI / 6), endY - headLen * Math.sin(angle + Math.PI / 6));
                ctx.fill();
            }
        }

    }, [fieldType]);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 my-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Vector Field Visualizer</h3>
                    <p className="text-slate-600 mb-6 text-sm">
                        Visualize different types of vector fields. This helps in understanding concepts like Divergence and Curl.
                    </p>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Select Field Type:</label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => setFieldType('source')}
                                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${fieldType === 'source' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                Source (Div &gt; 0)
                            </button>
                            <button
                                onClick={() => setFieldType('sink')}
                                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${fieldType === 'sink' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                Sink (Div &lt; 0)
                            </button>
                            <button
                                onClick={() => setFieldType('vortex')}
                                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${fieldType === 'vortex' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                Vortex (Curl ≠ 0)
                            </button>
                            <button
                                onClick={() => setFieldType('saddle')}
                                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${fieldType === 'saddle' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                Saddle Point
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-slate-50 rounded border border-slate-200 text-sm text-slate-600">
                        {fieldType === 'source' && <p>Vectors diverge from a central point. Positive Divergence.</p>}
                        {fieldType === 'sink' && <p>Vectors converge to a central point. Negative Divergence.</p>}
                        {fieldType === 'vortex' && <p>Vectors rotate around a central point. Non-zero Curl.</p>}
                        {fieldType === 'saddle' && <p>Vectors converge in one direction and diverge in another.</p>}
                    </div>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        width={320}
                        height={320}
                        className="w-[320px] h-[320px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default VectorField;
