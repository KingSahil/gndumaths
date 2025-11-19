import React from 'react';
import MathBlock from '../../components/MathBlock';

const RankInverse = () => {
    return (
        <div className="space-y-10">
            {/* Rank of a Matrix */}
            <section>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Rank of a Matrix</h1>
                <p className="text-lg text-slate-600 mb-4">
                    The rank of a matrix is the maximum number of linearly independent row vectors (or column vectors) in the matrix.
                    It is denoted by <MathBlock>{'\\rho(A)'}</MathBlock>.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                    <h3 className="font-bold text-blue-900">Key Properties</h3>
                    <ul className="list-disc list-inside text-blue-800 mt-2 space-y-1">
                        <li>The rank of a matrix is unique.</li>
                        <li><MathBlock>{'\\rho(A) \\leq \\min(m, n)'}</MathBlock> for an <MathBlock>{'m \\times n'}</MathBlock> matrix.</li>
                        <li>Row operations do not change the rank.</li>
                    </ul>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Finding Rank using Echelon Form</h3>
                <p className="text-slate-600 mb-4">
                    To find the rank, reduce the matrix to its <strong>Row Echelon Form</strong>. The number of non-zero rows in this form is the rank of the matrix.
                </p>

                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                    <h4 className="font-semibold text-slate-900 mb-2">Example</h4>
                    <p className="text-slate-600 mb-2">Find the rank of:</p>
                    <MathBlock block>{`A = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 7 \\\\ 3 & 6 & 10 \\end{bmatrix}`}</MathBlock>

                    <p className="text-slate-600 mt-4 mb-2"><strong>Step 1:</strong> <MathBlock>{'R_2 \\to R_2 - 2R_1'}</MathBlock>, <MathBlock>{'R_3 \\to R_3 - 3R_1'}</MathBlock></p>
                    <MathBlock block>{`\\sim \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 1 \\end{bmatrix}`}</MathBlock>

                    <p className="text-slate-600 mt-4 mb-2"><strong>Step 2:</strong> <MathBlock>{'R_3 \\to R_3 - R_2'}</MathBlock></p>
                    <MathBlock block>{`\\sim \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}`}</MathBlock>

                    <p className="text-slate-600 mt-4">
                        There are 2 non-zero rows. Thus, <MathBlock>{'\\rho(A) = 2'}</MathBlock>.
                    </p>
                </div>
            </section>

            {/* Inverse of a Matrix */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Inverse of a Matrix (Gauss-Jordan Method)</h2>
                <p className="text-lg text-slate-600 mb-4">
                    The Gauss-Jordan method is a systematic way to find the inverse of a matrix.
                    We augment the matrix <MathBlock>{'A'}</MathBlock> with the identity matrix <MathBlock>{'I'}</MathBlock> and apply row operations to transform <MathBlock>{'[A | I]'}</MathBlock> into <MathBlock>{'[I | A^{-1}]'}</MathBlock>.
                </p>

                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
                    <h3 className="font-bold text-indigo-900 mb-2">Algorithm</h3>
                    <ol className="list-decimal list-inside text-indigo-800 space-y-2">
                        <li>Write the augmented matrix <MathBlock>{'[A | I]'}</MathBlock>.</li>
                        <li>Use row operations to convert the left side (<MathBlock>{'A'}</MathBlock>) into the identity matrix (<MathBlock>{'I'}</MathBlock>).</li>
                        <li>The right side will automatically become <MathBlock>{'A^{-1}'}</MathBlock>.</li>
                    </ol>
                </div>
            </section>

            {/* Normal Form */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Normal Form</h2>
                <p className="text-lg text-slate-600 mb-4">
                    Every <MathBlock>{'m \\times n'}</MathBlock> matrix of rank <MathBlock>{'r'}</MathBlock> can be reduced to one of the following normal forms using both row and column operations:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="card p-4 text-center">
                        <MathBlock block>{`\\begin{bmatrix} I_r & 0 \\\\ 0 & 0 \\end{bmatrix}`}</MathBlock>
                    </div>
                    <div className="card p-4 text-center">
                        <MathBlock block>{`\\begin{bmatrix} I_r \\\\ 0 \\end{bmatrix}`}</MathBlock>
                    </div>
                    <div className="card p-4 text-center">
                        <MathBlock block>{`\\begin{bmatrix} I_r & 0 \\end{bmatrix}`}</MathBlock>
                    </div>
                    <div className="card p-4 text-center">
                        <MathBlock block>{`[I_r]`}</MathBlock>
                    </div>
                </div>

                <p className="text-slate-600 mt-4">
                    Where <MathBlock>{'I_r'}</MathBlock> is the identity matrix of order <MathBlock>{'r'}</MathBlock>.
                </p>
            </section>
        </div>
    );
};

export default RankInverse;
