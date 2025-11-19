import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import MatricesLayout from './pages/Matrices/MatricesLayout';
import MatricesIntro from './pages/Matrices/MatricesIntro';
import RankInverse from './pages/Matrices/RankInverse';
import SystemEquations from './pages/Matrices/SystemEquations';
import Eigen from './pages/Matrices/Eigen';

import DifferentialCalculusLayout from './pages/DifferentialCalculus/DifferentialCalculusLayout';
import PartialDerivatives from './pages/DifferentialCalculus/PartialDerivatives';
import TotalDerivatives from './pages/DifferentialCalculus/TotalDerivatives';
import TaylorMaxima from './pages/DifferentialCalculus/TaylorMaxima';

import IntegralCalculusLayout from './pages/IntegralCalculus/IntegralCalculusLayout';
import MultipleIntegrals from './pages/IntegralCalculus/MultipleIntegrals';
import BetaGamma from './pages/IntegralCalculus/BetaGamma';

import VectorCalculusLayout from './pages/VectorCalculus/VectorCalculusLayout';
import VectorDifferentiation from './pages/VectorCalculus/VectorDifferentiation';
import VectorIntegrals from './pages/VectorCalculus/VectorIntegrals';
import VectorTheorems from './pages/VectorCalculus/VectorTheorems';

import ErrorBoundary from './components/ErrorBoundary';

// ... imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="matrices" element={
            <ErrorBoundary>
              <MatricesLayout />
            </ErrorBoundary>
          }>
            <Route index element={<MatricesIntro />} />
            <Route path="rank" element={<RankInverse />} />
            <Route path="system" element={<SystemEquations />} />
            <Route path="eigen" element={<Eigen />} />
          </Route>
          <Route path="differential-calculus" element={
            <ErrorBoundary>
              <DifferentialCalculusLayout />
            </ErrorBoundary>
          }>
            <Route index element={<PartialDerivatives />} />
            <Route path="total" element={<TotalDerivatives />} />
            <Route path="taylor" element={<TaylorMaxima />} />
          </Route>
          <Route path="integral-calculus" element={
            <ErrorBoundary>
              <IntegralCalculusLayout />
            </ErrorBoundary>
          }>
            <Route index element={<MultipleIntegrals />} />
            <Route path="beta-gamma" element={<BetaGamma />} />
          </Route>
          <Route path="vector-calculus" element={
            <ErrorBoundary>
              <VectorCalculusLayout />
            </ErrorBoundary>
          }>
            <Route index element={<VectorDifferentiation />} />
            <Route path="integrals" element={<VectorIntegrals />} />
            <Route path="theorems" element={<VectorTheorems />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
