import React from 'react';
import MathBlock from '../../components/MathBlock';

const VectorDifferentiation = () => {
    return (
        <div className="space-y-10">
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Vector Differentiation</h1>
                <p className="text-lg text-slate-600 mb-4">
                    Let <MathBlock>{'\\vec{r} = x\\hat{i} + y\\hat{j} + z\\hat{k}'}</MathBlock> be a position vector where <MathBlock>{'x, y, z'}</MathBlock> are functions of a scalar variable <MathBlock>{'t'}</MathBlock>.
                </p>
                <MathBlock block>{'\\frac{d\\vec{r}}{dt} = \\frac{dx}{dt}\\hat{i} + \\frac{dy}{dt}\\hat{j} + \\frac{dz}{dt}\\hat{k}'}</MathBlock>
                <p className="text-slate-600 mt-4">
                    This represents the velocity vector. The second derivative represents acceleration.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Vector Differential Operator (Del)</h2>
                <p className="text-slate-600 mb-4">
                    The operator <MathBlock>{'\\nabla'}</MathBlock> (del or nabla) is defined as:
                </p>
                <MathBlock block>{'\\nabla = \\hat{i}\\frac{\\partial}{\\partial x} + \\hat{j}\\frac{\\partial}{\\partial y} + \\hat{k}\\frac{\\partial}{\\partial z}'}</MathBlock>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Gradient, Divergence, and Curl</h2>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="card p-6 border-t-4 border-t-blue-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Gradient</h3>
                        <p className="text-slate-600 mb-3">
                            Operates on a scalar field <MathBlock>{'\\phi'}</MathBlock>. Result is a vector field.
                        </p>
                        <MathBlock block>{'\\nabla \\phi = \\sum \\hat{i} \\frac{\\partial \\phi}{\\partial x}'}</MathBlock>
                        <p className="text-sm text-slate-500 mt-2">
                            Represents the direction of maximum rate of change.
                        </p>
                    </div>

                    <div className="card p-6 border-t-4 border-t-green-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Divergence</h3>
                        <p className="text-slate-600 mb-3">
                            Operates on a vector field <MathBlock>{'\\vec{F}'}</MathBlock>. Result is a scalar field.
                        </p>
                        <MathBlock block>{'\\nabla \\cdot \\vec{F} = \\frac{\\partial F_1}{\\partial x} + \\frac{\\partial F_2}{\\partial y} + \\frac{\\partial F_3}{\\partial z}'}</MathBlock>
                        <p className="text-sm text-slate-500 mt-2">
                            Represents the net outward flux per unit volume.
                        </p>
                    </div>

                    <div className="card p-6 border-t-4 border-t-red-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Curl</h3>
                        <p className="text-slate-600 mb-3">
                            Operates on a vector field <MathBlock>{'\\vec{F}'}</MathBlock>. Result is a vector field.
                        </p>
                        <MathBlock block>{'\\nabla \\times \\vec{F}'}</MathBlock>
                        <p className="text-sm text-slate-500 mt-2">
                            Represents the rotation or angular velocity of the field.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 mt-6">
                    <ul className="space-y-3 text-slate-700">
                        <li>
                            <strong>Solenoidal Vector:</strong> If <MathBlock>{'\\nabla \\cdot \\vec{F} = 0'}</MathBlock>.
                        </li>
                        <li>
                            <strong>Irrotational Vector:</strong> If <MathBlock>{'\\nabla \\times \\vec{F} = \\vec{0}'}</MathBlock>.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default VectorDifferentiation;
