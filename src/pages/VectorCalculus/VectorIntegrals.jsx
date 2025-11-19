import React from 'react';
import MathBlock from '../../components/MathBlock';

const VectorIntegrals = () => {
    return (
        <div className="space-y-10">
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Vector Integration</h1>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">Line Integral</h2>
                <p className="text-slate-600 mb-4">
                    The integral of a vector field <MathBlock>{'\\vec{F}'}</MathBlock> along a curve <MathBlock>{'C'}</MathBlock> is defined as:
                </p>
                <MathBlock block>{'\\int_C \\vec{F} \\cdot d\\vec{r} = \\int_C (F_1 dx + F_2 dy + F_3 dz)'}</MathBlock>
                <p className="text-slate-600 mt-4">
                    If <MathBlock>{'\\vec{F}'}</MathBlock> represents force, the line integral represents the <strong>work done</strong>.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Surface Integral</h2>
                <p className="text-slate-600 mb-4">
                    The integral of the normal component of a vector field <MathBlock>{'\\vec{F}'}</MathBlock> over a surface <MathBlock>{'S'}</MathBlock> is:
                </p>
                <MathBlock block>{'\\iint_S \\vec{F} \\cdot \\hat{n} \\, dS'}</MathBlock>
                <p className="text-slate-600 mt-4">
                    This represents the <strong>flux</strong> of <MathBlock>{'\\vec{F}'}</MathBlock> across <MathBlock>{'S'}</MathBlock>.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Volume Integral</h2>
                <p className="text-slate-600 mb-4">
                    The integral of a scalar or vector function over a volume <MathBlock>{'V'}</MathBlock> is:
                </p>
                <MathBlock block>{'\\iiint_V \\phi \\, dV \\quad \\text{or} \\quad \\iiint_V \\vec{F} \\, dV'}</MathBlock>
            </section>
        </div>
    );
};

export default VectorIntegrals;
