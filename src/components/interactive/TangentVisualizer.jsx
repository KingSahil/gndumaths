import React, { useState, useEffect, useRef } from 'react';
import MathBlock from '../MathBlock';

const TangentVisualizer = () => {
    const [xVal, setXVal] = useState(1);
    const canvasRef = useRef(null);

    // Function: f(x) = x^2 / 4
    const f = (x) => (x * x) / 4;
    // Derivative: f'(x) = x / 2
    const df = (x) => x / 2;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Coordinate system settings
        const scale = 40; // pixels per unit
        const centerX = width / 2;
        const centerY = height - 50; // Shift origin down a bit

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw Axes
        ctx.strokeStyle = '#cbd5e1'; // slate-300
        ctx.lineWidth = 1;

        // X-axis
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.stroke();

        // Y-axis
        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, height);
        ctx.stroke();

        // Helper to transform coords
        const toCanvas = (x, y) => ({
            x: centerX + x * scale,
            y: centerY - y * scale
        });

        // Draw Curve f(x)
        ctx.strokeStyle = '#3b82f6'; // blue-500
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let px = 0; px <= width; px++) {
            const x = (px - centerX) / scale;
            const y = f(x);
            const py = centerY - y * scale;
            if (px === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Draw Tangent Line
        // Equation: y - y1 = m(x - x1) => y = m(x - x1) + y1
        const x1 = xVal;
        const y1 = f(x1);
        const m = df(x1);

        const tangentLength = 4; // units to extend
        const startX = x1 - tangentLength;
        const endX = x1 + tangentLength;
        const startY = m * (startX - x1) + y1;
        const endY = m * (endX - x1) + y1;

        const start = toCanvas(startX, startY);
        const end = toCanvas(endX, endY);

        ctx.strokeStyle = '#ef4444'; // red-500
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        // Draw Point
        const point = toCanvas(x1, y1);
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw Dashed lines to axes
        ctx.strokeStyle = '#94a3b8';
        ctx.setLineDash([5, 5]);
        ctx.lineWidth = 1;

        // Vertical dash
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point.x, centerY);
        ctx.stroke();

        // Horizontal dash
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(centerX, point.y);
        ctx.stroke();
        ctx.setLineDash([]);

    }, [xVal]);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 my-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Derivative as Slope</h3>
                    <p className="text-slate-600 mb-4 text-sm">
                        The derivative <MathBlock>{'f\'(x)'}</MathBlock> represents the slope of the tangent line at point <MathBlock>{'x'}</MathBlock>.
                    </p>
                    <div className="mb-4 p-3 bg-slate-50 rounded border border-slate-200">
                        <p className="text-sm text-slate-700 mb-1">Function: <MathBlock>{'f(x) = \\frac{x^2}{4}'}</MathBlock></p>
                        <p className="text-sm text-slate-700">Derivative: <MathBlock>{'f\'(x) = \\frac{x}{2}'}</MathBlock></p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Value of x: <span className="font-mono text-blue-600">{xVal.toFixed(2)}</span>
                            </label>
                            <input
                                type="range"
                                min="-4"
                                max="4"
                                step="0.1"
                                value={xVal}
                                onChange={(e) => setXVal(parseFloat(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="p-2 bg-blue-50 rounded">
                                <div className="text-xs text-blue-600 uppercase font-bold">Slope (m)</div>
                                <div className="text-lg font-mono text-blue-900">{df(xVal).toFixed(2)}</div>
                            </div>
                            <div className="p-2 bg-slate-50 rounded">
                                <div className="text-xs text-slate-500 uppercase font-bold">Angle</div>
                                <div className="text-lg font-mono text-slate-700">{(Math.atan(df(xVal)) * 180 / Math.PI).toFixed(1)}°</div>
                            </div>
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

export default TangentVisualizer;
