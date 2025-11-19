import React from 'react';
import MathBlock from '../../components/MathBlock';

const TotalDerivatives = () => {
    return (
        <div className="space-y-10">
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Total Derivatives</h1>
                <p className="text-lg text-slate-600 mb-4">
                    If <MathBlock>{'u = f(x, y)'}</MathBlock>, where <MathBlock>{'x'}</MathBlock> and <MathBlock>{'y'}</MathBlock> are functions of a single variable <MathBlock>{'t'}</MathBlock>, then the total derivative of <MathBlock>{'u'}</MathBlock> with respect to <MathBlock>{'t'}</MathBlock> is:
                </p>
                <MathBlock block>{'\\frac{du}{dt} = \\frac{\\partial u}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial u}{\\partial y}\\frac{dy}{dt}'}</MathBlock>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Composite Functions</h2>
                <p className="text-slate-600 mb-4">
                    If <MathBlock>{'z = f(x, y)'}</MathBlock> where <MathBlock>{'x = \\phi(u, v)'}</MathBlock> and <MathBlock>{'y = \\psi(u, v)'}</MathBlock>, then <MathBlock>{'z'}</MathBlock> is a composite function of <MathBlock>{'u'}</MathBlock> and <MathBlock>{'v'}</MathBlock>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="card p-6">
                        <h3 className="font-bold text-slate-900 mb-2">Partial Derivative w.r.t u</h3>
                        <MathBlock block>{'\\frac{\\partial z}{\\partial u} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial u} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial u}'}</MathBlock>
                    </div>
                    <div className="card p-6">
                        <h3 className="font-bold text-slate-900 mb-2">Partial Derivative w.r.t v</h3>
                        <MathBlock block>{'\\frac{\\partial z}{\\partial v} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial v} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial v}'}</MathBlock>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Jacobian</h2>
                <p className="text-slate-600 mb-4">
                    If <MathBlock>{'u'}</MathBlock> and <MathBlock>{'v'}</MathBlock> are functions of two independent variables <MathBlock>{'x'}</MathBlock> and <MathBlock>{'y'}</MathBlock>, then the determinant:
                </p>
                <MathBlock block>
                    {`J\\left(\\frac{u, v}{x, y}\\right) = \\begin{vmatrix} 
          \\frac{\\partial u}{\\partial x} & \\frac{\\partial u}{\\partial y} \\\\
          \\frac{\\partial v}{\\partial x} & \\frac{\\partial v}{\\partial y}
          \\end{vmatrix}`}
                </MathBlock>
                <p className="text-slate-600 mt-4">
                    is called the Jacobian of <MathBlock>{'u, v'}</MathBlock> with respect to <MathBlock>{'x, y'}</MathBlock>.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                    <h3 className="font-bold text-yellow-900">Chain Rule for Jacobians</h3>
                    <MathBlock block>{'J\\left(\\frac{u, v}{x, y}\\right) \\times J\\left(\\frac{x, y}{u, v}\\right) = 1'}</MathBlock>
                </div>
            </section>
        </div>
    );
};

export default TotalDerivatives;
