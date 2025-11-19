import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw } from 'lucide-react';
import MathBlock from '../MathBlock';

const MatrixVisualizer = () => {
    const [matrix, setMatrix] = useState({ a: 1, b: 0, c: 0, d: 1 });
    const canvasRef = useRef(null);

    const handleChange = (key, value) => {
        setMatrix(prev => ({ ...prev, [key]: parseFloat(value) || 0 }));
    };

    const resetMatrix = () => {
        setMatrix({ a: 1, b: 0, c: 0, d: 1 });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const scale = 40; // Pixels per unit

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw background grid (faint)
        ctx.strokeStyle = '#f1f5f9'; // slate-100
        ctx.lineWidth = 1;
        for (let x = 0; x <= width; x += scale) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
        }
        for (let y = 0; y <= height; y += scale) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
        }

        // Function to transform point
        const transform = (x, y) => {
            const newX = matrix.a * x + matrix.b * y;
            const newY = matrix.c * x + matrix.d * y;
            return {
                x: centerX + newX * scale,
                y: centerY - newY * scale // Flip Y for canvas coords
            };
        };

        // Draw Transformed Grid
        ctx.lineWidth = 1.5;
        const gridSize = 5; // Units from center

        // Vertical lines (Red-ish tint)
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)'; // red-500
        for (let i = -gridSize; i <= gridSize; i++) {
            const start = transform(i, -gridSize);
            const end = transform(i, gridSize);
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
        }

        // Horizontal lines (Blue-ish tint)
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)'; // blue-500
        for (let i = -gridSize; i <= gridSize; i++) {
            const start = transform(-gridSize, i);
            const end = transform(gridSize, i);
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
        }

        // Draw Axes
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#0f172a'; // slate-900
        const origin = transform(0, 0);
        const xEnd = transform(gridSize + 1, 0); // Extended X axis
        const yEnd = transform(0, gridSize + 1); // Extended Y axis
        const xStart = transform(-(gridSize + 1), 0);
        const yStart = transform(0, -(gridSize + 1));

        ctx.beginPath(); ctx.moveTo(xStart.x, xStart.y); ctx.lineTo(xEnd.x, xEnd.y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(yStart.x, yStart.y); ctx.lineTo(yEnd.x, yEnd.y); ctx.stroke();

        // Draw Unit Vectors
        // i-hat (Red)
        const iHat = transform(1, 0);
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(origin.x, origin.y); ctx.lineTo(iHat.x, iHat.y); ctx.stroke();
        // Arrowhead
        // ... (simplified for now)

        // j-hat (Green)
        const jHat = transform(0, 1);
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(origin.x, origin.y); ctx.lineTo(jHat.x, jHat.y); ctx.stroke();

    }, [matrix]);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 my-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Linear Transformation Visualizer</h3>
                    <p className="text-slate-600 mb-6 text-sm">
                        Adjust the matrix values to see how they transform the grid.
                        The <span className="text-red-500 font-bold">red vector</span> is <MathBlock>{'\\hat{i}'}</MathBlock> and the <span className="text-green-500 font-bold">green vector</span> is <MathBlock>{'\\hat{j}'}</MathBlock>.
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="text-xl font-serif italic">A = </div>
                        <div className="grid grid-cols-2 gap-2 p-2 border-l-2 border-r-2 border-slate-800 rounded-sm">
                            <input
                                type="number"
                                value={matrix.a}
                                onChange={(e) => handleChange('a', e.target.value)}
                                className="w-16 text-center p-1 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                step="0.1"
                            />
                            <input
                                type="number"
                                value={matrix.b}
                                onChange={(e) => handleChange('b', e.target.value)}
                                className="w-16 text-center p-1 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                step="0.1"
                            />
                            <input
                                type="number"
                                value={matrix.c}
                                onChange={(e) => handleChange('c', e.target.value)}
                                className="w-16 text-center p-1 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                step="0.1"
                            />
                            <input
                                type="number"
                                value={matrix.d}
                                onChange={(e) => handleChange('d', e.target.value)}
                                className="w-16 text-center p-1 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                step="0.1"
                            />
                        </div>
                        <button
                            onClick={resetMatrix}
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                            title="Reset to Identity"
                        >
                            <RefreshCw size={20} />
                        </button>
                    </div>

                    <div className="space-y-2 text-sm text-slate-500">
                        <p>Try these:</p>
                        <div className="flex flex-wrap gap-2">
                            <button onClick={() => setMatrix({ a: 2, b: 0, c: 0, d: 2 })} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs">Scaling</button>
                            <button onClick={() => setMatrix({ a: 0, b: -1, c: 1, d: 0 })} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs">Rotation (90°)</button>
                            <button onClick={() => setMatrix({ a: 1, b: 1, c: 0, d: 1 })} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs">Shear X</button>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
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

export default MatrixVisualizer;
