import React from 'react';
import MathBlock from '../../components/MathBlock';
import TangentVisualizer from '../../components/interactive/TangentVisualizer';

const PartialDerivatives = () => {
    return (
        <div className="space-y-10">
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Partial Derivatives</h1>
                <p className="text-lg text-slate-600 mb-4">
                    Let <MathBlock>{'z = f(x, y)'}</MathBlock> be a function of two independent variables <MathBlock>{'x'}</MathBlock> and <MathBlock>{'y'}</MathBlock>.
                    The derivative of <MathBlock>{'z'}</MathBlock> with respect to <MathBlock>{'x'}</MathBlock>, keeping <MathBlock>{'y'}</MathBlock> constant, is called the partial derivative of <MathBlock>{'z'}</MathBlock> w.r.t <MathBlock>{'x'}</MathBlock>.
                </p>

                <TangentVisualizer />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="card p-4 border-l-4 border-emerald-500">
                        <h3 className="font-bold text-slate-900">Notation (w.r.t x)</h3>
                        <MathBlock block>{'\\frac{\\partial z}{\\partial x}, f_x, z_x'}</MathBlock>
                    </div>
                    <div className="card p-4 border-l-4 border-emerald-500">
                        <h3 className="font-bold text-slate-900">Notation (w.r.t y)</h3>
                        <MathBlock block>{'\\frac{\\partial z}{\\partial y}, f_y, z_y'}</MathBlock>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Homogeneous Functions</h2>
                <p className="text-slate-600 mb-4">
                    A function <MathBlock>{'f(x, y)'}</MathBlock> is said to be a homogeneous function of degree <MathBlock>{'n'}</MathBlock> if:
                </p>
                <MathBlock block>{'f(tx, ty) = t^n f(x, y)'}</MathBlock>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Euler's Theorem</h2>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
                    <p className="text-lg text-emerald-900 font-medium">
                        If <MathBlock>{'u'}</MathBlock> is a homogeneous function of degree <MathBlock>{'n'}</MathBlock> in <MathBlock>{'x'}</MathBlock> and <MathBlock>{'y'}</MathBlock>, then:
                    </p>
                    <MathBlock block>{'x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = nu'}</MathBlock>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Extension of Euler's Theorem</h3>
                <p className="text-slate-600 mb-2">
                    If <MathBlock>{'u = f(x, y)'}</MathBlock> is a homogeneous function of degree <MathBlock>{'n'}</MathBlock>, then:
                </p>
                <MathBlock block>{'x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = n(n-1)u'}</MathBlock>
            </section>
        </div>
    );
};

export default PartialDerivatives;
