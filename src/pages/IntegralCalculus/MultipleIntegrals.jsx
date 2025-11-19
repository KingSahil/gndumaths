import React from 'react';
import MathBlock from '../../components/MathBlock';

const MultipleIntegrals = () => {
    return (
        <div className="space-y-10">
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Multiple Integrals</h1>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">Double Integrals</h2>
                <p className="text-slate-600 mb-4">
                    The double integral of a function <MathBlock>{'f(x, y)'}</MathBlock> over a region <MathBlock>{'R'}</MathBlock> is denoted by:
                </p>
                <MathBlock block>{'\\iint_R f(x, y) \\, dx \\, dy'}</MathBlock>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-4">
                    <h3 className="font-bold text-indigo-900">Evaluation</h3>
                    <p className="text-indigo-800 mt-2">
                        It is evaluated as an iterated integral:
                    </p>
                    <MathBlock block>{'\\int_{x=a}^{b} \\int_{y=g_1(x)}^{g_2(x)} f(x, y) \\, dy \\, dx'}</MathBlock>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Change of Order of Integration</h3>
                <p className="text-slate-600 mb-4">
                    Sometimes, changing the order of integration (integrating w.r.t <MathBlock>{'x'}</MathBlock> first, then <MathBlock>{'y'}</MathBlock>, or vice-versa) makes the integral easier to solve.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Triple Integrals</h2>
                <p className="text-slate-600 mb-4">
                    The triple integral of a function <MathBlock>{'f(x, y, z)'}</MathBlock> over a region <MathBlock>{'V'}</MathBlock> is:
                </p>
                <MathBlock block>{'\\iiint_V f(x, y, z) \\, dx \\, dy \\, dz'}</MathBlock>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="card p-4">
                        <h4 className="font-bold text-slate-900">Area (Double Integral)</h4>
                        <MathBlock block>{'\\text{Area} = \\iint_R dx \\, dy'}</MathBlock>
                    </div>
                    <div className="card p-4">
                        <h4 className="font-bold text-slate-900">Volume (Triple Integral)</h4>
                        <MathBlock block>{'\\text{Volume} = \\iiint_V dx \\, dy \\, dz'}</MathBlock>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Change of Variables (Jacobian)</h2>
                <p className="text-slate-600 mb-4">
                    To transform double integrals from Cartesian <MathBlock>{'(x, y)'}</MathBlock> to Polar <MathBlock>{'(r, \\theta)'}</MathBlock> coordinates:
                </p>
                <MathBlock block>{'dx \\, dy = |J| \\, dr \\, d\\theta = r \\, dr \\, d\\theta'}</MathBlock>
                <p className="text-slate-600 mt-4">
                    where <MathBlock>{'x = r \\cos\\theta'}</MathBlock> and <MathBlock>{'y = r \\sin\\theta'}</MathBlock>.
                </p>
            </section>
        </div>
    );
};

export default MultipleIntegrals;
