import React from 'react';
import MathBlock from '../../components/MathBlock';

const SystemEquations = () => {
    return (
        <div className="space-y-10">
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">System of Linear Equations</h1>
                <p className="text-lg text-slate-600 mb-4">
                    A system of linear equations can be represented in matrix form as <MathBlock>{'AX = B'}</MathBlock>, where:
                </p>
                <ul className="list-disc list-inside text-slate-600 ml-4 mb-4">
                    <li><MathBlock>{'A'}</MathBlock> is the coefficient matrix.</li>
                    <li><MathBlock>{'X'}</MathBlock> is the column matrix of variables.</li>
                    <li><MathBlock>{'B'}</MathBlock> is the column matrix of constants.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Consistency of a System</h2>
                <p className="text-slate-600 mb-4">
                    A system is said to be <strong>consistent</strong> if it has at least one solution. Otherwise, it is <strong>inconsistent</strong>.
                </p>
                <p className="text-slate-600 mb-4">
                    We test consistency using the rank of the augmented matrix <MathBlock>{'[A|B]'}</MathBlock> and the coefficient matrix <MathBlock>{'A'}</MathBlock>.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="card p-6 border-t-4 border-t-green-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Unique Solution</h3>
                        <p className="text-slate-600 mb-3">
                            The system is consistent and has a unique solution if:
                        </p>
                        <MathBlock block>{'\\rho(A) = \\rho([A|B]) = n'}</MathBlock>
                        <p className="text-sm text-slate-500 mt-2">
                            Where <MathBlock>{'n'}</MathBlock> is the number of variables.
                        </p>
                    </div>

                    <div className="card p-6 border-t-4 border-t-yellow-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Infinite Solutions</h3>
                        <p className="text-slate-600 mb-3">
                            The system is consistent and has infinitely many solutions if:
                        </p>
                        <MathBlock block>{'\\rho(A) = \\rho([A|B]) < n'}</MathBlock>
                        <p className="text-sm text-slate-500 mt-2">
                            We assign arbitrary values to <MathBlock>{'n - r'}</MathBlock> variables.
                        </p>
                    </div>

                    <div className="card p-6 border-t-4 border-t-red-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">No Solution</h3>
                        <p className="text-slate-600 mb-3">
                            The system is inconsistent if:
                        </p>
                        <MathBlock block>{'\\rho(A) \\neq \\rho([A|B])'}</MathBlock>
                        <p className="text-sm text-slate-500 mt-2">
                            Usually <MathBlock>{'\\rho(A) < \\rho([A|B])'}</MathBlock>.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Homogeneous System</h2>
                <p className="text-slate-600 mb-4">
                    If <MathBlock>{'B = 0'}</MathBlock>, the system is <MathBlock>{'AX = 0'}</MathBlock>. It is always consistent because <MathBlock>{'X = 0'}</MathBlock> (trivial solution) always satisfies it.
                </p>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <ul className="space-y-3 text-slate-700">
                        <li>
                            <strong>Trivial Solution (Zero Solution):</strong> If <MathBlock>{'\\rho(A) = n'}</MathBlock>, the only solution is <MathBlock>{'X = 0'}</MathBlock>.
                        </li>
                        <li>
                            <strong>Non-Trivial Solution (Non-Zero):</strong> If <MathBlock>{'\\rho(A) < n'}</MathBlock>, there are infinitely many solutions.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default SystemEquations;
