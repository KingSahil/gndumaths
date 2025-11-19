import React from 'react';
import MathBlock from '../../components/MathBlock';

const Eigen = () => {
    return (
        <div className="space-y-10">
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Eigen Values and Eigen Vectors</h1>
                <p className="text-lg text-slate-600 mb-4">
                    Let <MathBlock>{'A'}</MathBlock> be a square matrix of order <MathBlock>{'n'}</MathBlock>. A scalar <MathBlock>{'\\lambda'}</MathBlock> is called an <strong>Eigen value</strong> of <MathBlock>{'A'}</MathBlock> if there exists a non-zero column vector <MathBlock>{'X'}</MathBlock> such that:
                </p>
                <MathBlock block>{'AX = \\lambda X'}</MathBlock>
                <p className="text-slate-600 mt-4">
                    The vector <MathBlock>{'X'}</MathBlock> is called the <strong>Eigen vector</strong> corresponding to <MathBlock>{'\\lambda'}</MathBlock>.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Characteristic Equation</h2>
                <p className="text-slate-600 mb-4">
                    To find the Eigen values, we solve the characteristic equation:
                </p>
                <MathBlock block>{'|A - \\lambda I| = 0'}</MathBlock>
                <p className="text-slate-600 mt-4">
                    The roots of this equation are the Eigen values.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Cayley-Hamilton Theorem</h2>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                    <p className="text-lg text-purple-900 font-medium">
                        "Every square matrix satisfies its own characteristic equation."
                    </p>
                </div>
                <p className="text-slate-600 mt-4 mb-2">
                    If the characteristic equation is <MathBlock>{'\\lambda^n + a_{n-1}\\lambda^{n-1} + \\dots + a_0 = 0'}</MathBlock>, then:
                </p>
                <MathBlock block>{'A^n + a_{n-1}A^{n-1} + \\dots + a_0 I = 0'}</MathBlock>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Applications</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>To find the inverse of a matrix: <MathBlock>{'A^{-1}'}</MathBlock>.</li>
                    <li>To find higher powers of a matrix: <MathBlock>{'A^k'}</MathBlock>.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Diagonalization</h2>
                <p className="text-slate-600 mb-4">
                    A square matrix <MathBlock>{'A'}</MathBlock> is diagonalizable if there exists a non-singular matrix <MathBlock>{'P'}</MathBlock> such that <MathBlock>{'P^{-1}AP = D'}</MathBlock>, where <MathBlock>{'D'}</MathBlock> is a diagonal matrix.
                </p>
                <p className="text-slate-600 mb-4">
                    The diagonal elements of <MathBlock>{'D'}</MathBlock> are the Eigen values of <MathBlock>{'A'}</MathBlock>, and the columns of <MathBlock>{'P'}</MathBlock> are the corresponding Eigen vectors.
                </p>
                <MathBlock block>{'D = \\text{diag}(\\lambda_1, \\lambda_2, \\dots, \\lambda_n)'}</MathBlock>
            </section>
        </div>
    );
};

export default Eigen;
