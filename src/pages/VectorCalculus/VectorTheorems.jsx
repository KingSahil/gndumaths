import React from 'react';
import MathBlock from '../../components/MathBlock';

const VectorTheorems = () => {
    return (
        <div className="space-y-10">
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Integral Theorems</h1>
                <p className="text-lg text-slate-600 mb-4">
                    These theorems relate different types of integrals (line, surface, volume) to each other.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Green's Theorem</h2>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <p className="text-lg text-orange-900 font-medium mb-3">
                        Relates a line integral along a simple closed curve <MathBlock>{'C'}</MathBlock> in a plane to a double integral over the plane region <MathBlock>{'R'}</MathBlock> bounded by <MathBlock>{'C'}</MathBlock>.
                    </p>
                    <MathBlock block>
                        {`\\oint_C (M dx + N dy) = \\iint_R \\left( \\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y} \\right) dx \\, dy`}
                    </MathBlock>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Stokes' Theorem</h2>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="text-lg text-blue-900 font-medium mb-3">
                        Relates a surface integral over a surface <MathBlock>{'S'}</MathBlock> to a line integral around the boundary curve <MathBlock>{'C'}</MathBlock> of <MathBlock>{'S'}</MathBlock>.
                    </p>
                    <MathBlock block>
                        {`\\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot \\hat{n} \\, dS`}
                    </MathBlock>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Gauss Divergence Theorem</h2>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <p className="text-lg text-green-900 font-medium mb-3">
                        Relates a surface integral over a closed surface <MathBlock>{'S'}</MathBlock> to a volume integral over the volume <MathBlock>{'V'}</MathBlock> enclosed by <MathBlock>{'S'}</MathBlock>.
                    </p>
                    <MathBlock block>
                        {`\\iint_S \\vec{F} \\cdot \\hat{n} \\, dS = \\iiint_V (\\nabla \\cdot \\vec{F}) \\, dV`}
                    </MathBlock>
                </div>
            </section>
        </div>
    );
};

export default VectorTheorems;
