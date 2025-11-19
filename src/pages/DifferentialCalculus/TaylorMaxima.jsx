import React from 'react';
import MathBlock from '../../components/MathBlock';

const TaylorMaxima = () => {
    return (
        <div className="space-y-10">
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Taylor's and Maclaurin's Expansions</h1>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Taylor's Series for Two Variables</h3>
                <p className="text-slate-600 mb-4">
                    Expansion of <MathBlock>{'f(x, y)'}</MathBlock> about the point <MathBlock>{'(a, b)'}</MathBlock>:
                </p>
                <MathBlock block>
                    {`f(x, y) = f(a, b) + \\left[ (x-a)f_x(a,b) + (y-b)f_y(a,b) \\right] + \\frac{1}{2!} \\left[ (x-a)^2 f_{xx} + 2(x-a)(y-b)f_{xy} + (y-b)^2 f_{yy} \\right] + \\dots`}
                </MathBlock>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Maclaurin's Series</h3>
                <p className="text-slate-600 mb-4">
                    Put <MathBlock>{'a = 0, b = 0'}</MathBlock> in Taylor's series.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Maxima and Minima (Two Variables)</h2>
                <p className="text-slate-600 mb-4">
                    To find the extreme values of <MathBlock>{'f(x, y)'}</MathBlock>:
                </p>

                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                    <ol className="list-decimal list-inside text-slate-700 space-y-3">
                        <li>Find stationary points by solving <MathBlock>{'\\frac{\\partial f}{\\partial x} = 0'}</MathBlock> and <MathBlock>{'\\frac{\\partial f}{\\partial y} = 0'}</MathBlock>.</li>
                        <li>Calculate <MathBlock>{'r = f_{xx}'}</MathBlock>, <MathBlock>{'s = f_{xy}'}</MathBlock>, <MathBlock>{'t = f_{yy}'}</MathBlock> at these points.</li>
                        <li>Calculate <MathBlock>{'rt - s^2'}</MathBlock>.</li>
                    </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="card p-4 border-t-4 border-t-green-500">
                        <h3 className="font-bold text-slate-900">Maximum</h3>
                        <p className="text-slate-600 mt-2">If <MathBlock>{'rt - s^2 > 0'}</MathBlock> and <MathBlock>{'r < 0'}</MathBlock></p>
                    </div>
                    <div className="card p-4 border-t-4 border-t-blue-500">
                        <h3 className="font-bold text-slate-900">Minimum</h3>
                        <p className="text-slate-600 mt-2">If <MathBlock>{'rt - s^2 > 0'}</MathBlock> and <MathBlock>{'r > 0'}</MathBlock></p>
                    </div>
                    <div className="card p-4 border-t-4 border-t-red-500">
                        <h3 className="font-bold text-slate-900">Saddle Point</h3>
                        <p className="text-slate-600 mt-2">If <MathBlock>{'rt - s^2 < 0'}</MathBlock></p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Lagrange's Method of Undetermined Multipliers</h2>
                <p className="text-slate-600 mb-4">
                    Used to find extrema of <MathBlock>{'f(x, y, z)'}</MathBlock> subject to constraint <MathBlock>{'\\phi(x, y, z) = 0'}</MathBlock>.
                </p>
                <p className="text-slate-600">
                    Construct the Lagrangian function: <MathBlock>{'F(x, y, z, \\lambda) = f(x, y, z) + \\lambda \\phi(x, y, z)'}</MathBlock>.
                </p>
            </section>
        </div>
    );
};

export default TaylorMaxima;
