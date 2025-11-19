import React from 'react';
import MathBlock from '../../components/MathBlock';
import MatrixVisualizer from '../../components/interactive/MatrixVisualizer';

const MatricesIntro = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Introduction to Matrices</h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    A matrix is a rectangular array of numbers, symbols, or expressions, arranged in rows and columns.
                    Matrices are fundamental in linear algebra and are used to solve systems of linear equations,
                    represent linear transformations, and more.
                </p>
            </div>

            <MatrixVisualizer />

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Basic Notation</h2>
                <p className="text-slate-600 mb-4">
                    A matrix <MathBlock>{'A'}</MathBlock> of order <MathBlock>{'m \\times n'}</MathBlock> has <MathBlock>{'m'}</MathBlock> rows and <MathBlock>{'n'}</MathBlock> columns.
                </p>
                <MathBlock block>
                    {`A = \\begin{bmatrix} 
          a_{11} & a_{12} & \\cdots & a_{1n} \\\\
          a_{21} & a_{22} & \\cdots & a_{2n} \\\\
          \\vdots & \\vdots & \\ddots & \\vdots \\\\
          a_{m1} & a_{m2} & \\cdots & a_{mn} 
          \\end{bmatrix}`}
                </MathBlock>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Complex Matrices</h2>
                <p className="text-slate-600 mb-6">
                    Matrices with complex number entries have special properties and names. Let <MathBlock>{'A'}</MathBlock> be a square matrix with complex entries.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="card p-6 border-l-4 border-l-blue-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Hermitian Matrix</h3>
                        <p className="text-slate-600 mb-3">
                            A square matrix <MathBlock>{'A'}</MathBlock> is Hermitian if it is equal to its conjugate transpose (<MathBlock>{'A^\\theta'}</MathBlock> or <MathBlock>{'A^*'}</MathBlock>).
                        </p>
                        <MathBlock block>{'A^\\theta = (\\bar{A})^T = A'}</MathBlock>
                        <p className="text-sm text-slate-500 mt-2">
                            *Diagonal elements must be real numbers.*
                        </p>
                    </div>

                    <div className="card p-6 border-l-4 border-l-indigo-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Skew-Hermitian Matrix</h3>
                        <p className="text-slate-600 mb-3">
                            A square matrix <MathBlock>{'A'}</MathBlock> is Skew-Hermitian if its conjugate transpose is equal to its negative.
                        </p>
                        <MathBlock block>{'A^\\theta = -A'}</MathBlock>
                        <p className="text-sm text-slate-500 mt-2">
                            *Diagonal elements must be either 0 or purely imaginary.*
                        </p>
                    </div>

                    <div className="card p-6 border-l-4 border-l-purple-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Unitary Matrix</h3>
                        <p className="text-slate-600 mb-3">
                            A square matrix <MathBlock>{'U'}</MathBlock> is Unitary if its inverse equals its conjugate transpose.
                        </p>
                        <MathBlock block>{'U^\\theta U = U U^\\theta = I'}</MathBlock>
                    </div>

                    <div className="card p-6 border-l-4 border-l-pink-500">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Orthogonal Matrix</h3>
                        <p className="text-slate-600 mb-3">
                            A real square matrix <MathBlock>{'Q'}</MathBlock> is Orthogonal if its transpose is equal to its inverse.
                        </p>
                        <MathBlock block>{'Q^T Q = Q Q^T = I'}</MathBlock>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatricesIntro;
