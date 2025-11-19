import React from 'react';
import MathBlock from '../../components/MathBlock';

const BetaGamma = () => {
    return (
        <div className="space-y-10">
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Beta and Gamma Functions</h1>
                <p className="text-lg text-slate-600 mb-4">
                    Beta and Gamma functions are special functions, also known as Euler's integrals of the first and second kind respectively.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Gamma Function</h2>
                <p className="text-slate-600 mb-4">
                    The Gamma function <MathBlock>{'\\Gamma(n)'}</MathBlock> is defined for <MathBlock>{'n > 0'}</MathBlock> as:
                </p>
                <MathBlock block>{'\\Gamma(n) = \\int_0^\\infty e^{-x} x^{n-1} \\, dx'}</MathBlock>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-4">
                    <h3 className="font-bold text-purple-900">Properties</h3>
                    <ul className="list-disc list-inside text-purple-800 mt-2 space-y-1">
                        <li><MathBlock>{'\\Gamma(n+1) = n\\Gamma(n)'}</MathBlock></li>
                        <li><MathBlock>{'\\Gamma(n+1) = n!'}</MathBlock> (if <MathBlock>{'n'}</MathBlock> is a positive integer)</li>
                        <li><MathBlock>{'\\Gamma(1/2) = \\sqrt{\\pi}'}</MathBlock></li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Beta Function</h2>
                <p className="text-slate-600 mb-4">
                    The Beta function <MathBlock>{'B(m, n)'}</MathBlock> is defined for <MathBlock>{'m > 0, n > 0'}</MathBlock> as:
                </p>
                <MathBlock block>{'B(m, n) = \\int_0^1 x^{m-1} (1-x)^{n-1} \\, dx'}</MathBlock>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Relation between Beta and Gamma</h3>
                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm text-center">
                    <MathBlock block>{'B(m, n) = \\frac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}'}</MathBlock>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Dirichlet's Integral</h2>
                <p className="text-slate-600 mb-4">
                    Useful for evaluating multiple integrals over regions bounded by coordinate planes.
                </p>
                <MathBlock block>
                    {`\\iiint_V x^{l-1} y^{m-1} z^{n-1} \\, dx \\, dy \\, dz = \\frac{\\Gamma(l)\\Gamma(m)\\Gamma(n)}{\\Gamma(l+m+n+1)}`}
                </MathBlock>
                <p className="text-slate-600 mt-4">
                    where <MathBlock>{'V'}</MathBlock> is the region <MathBlock>{'x \\ge 0, y \\ge 0, z \\ge 0'}</MathBlock> and <MathBlock>{'x + y + z \\le 1'}</MathBlock>.
                </p>
            </section>
        </div>
    );
};

export default BetaGamma;
